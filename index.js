// var pmx        = require('pmx').init(); -> Probably for versioning
var path       = require('path');
var	fs         = require('fs');
var	http       = require('http');
var	https      = require('https');
var express    = require('express');
var Promise    = require('bluebird');
var constants  = require('./app/utils/constants');
var logger     = require('./app/utils/logger');
// var version    = require('./app/utils/version');
var config     = require('./app/config');
var mongoose   = require('mongoose');
var RotatingFileStream = require('bunyan-rotating-file-stream');
// var jwt = require('jwt-simple');TODO:delete
var	server     = {};
var	app;

// add promises support to modules (https://github.com/petkaantonov/bluebird/blob/master/API.md#promisification)
// TODO: delete mongoose
// var mongoose = Promise.promisifyAll(require('mongoose'));
Promise.promisifyAll(require('request'));

function requiredProcessEnv(name) {
  return new Promise(function (resolve, reject) {
    if (process.env[name]) {
      resolve(true);
    } else {
      var err = new Error('Please set the ' + name + ' environment variable');
      reject(err);
    }
  });
}

// Get reference to an express app instance.
app = express();
/* --- Initialization ---
1. check for required environment variables
2. then load configuration
3. then create application logger instance
4. then connect to mongodb
5. then setup middleware and routes
6. create and start the HTTP/S server
*/
return requiredProcessEnv('LOCAL_CONFIG_FILE')
  .then(function() {        
				return config.init()
  })
  .then(function (configData) {    
    if (config.getConfigValue('log.app.file').length) {
      logger({
        level: configData['log.app.level'],
        src: config.getConfigValue('log.app.src'),
        streams: [{
            stream: new RotatingFileStream({
                path: path.resolve(configData['log.app.file']),
                type: 'file',
                period: '1d',          // daily rotation
                totalFiles: 20,        // keep up to 20 back copies
                rotateExisting: true,  // Give ourselves a clean file when we start up, based on period
                threshold: '200m',      // Rotate log files larger than 20 mb
                totalSize: '400m',      // Don't keep more than 400mb of archived log files
                gzip: true             // Compress the archive log files to save space
            })
        }]
      });
    }

    // return mongoose.connectAsync('mongodb://' + configData['mongo.uri']);
  })
  .then(function() {    
				require('./app/middleware')(app);        
				require('./app/routes')(app);

        // Add token secret for the token mechanism
        app.set('secret', constants.TOKEN_SECRET);

        // Open connection to the DB
        //mongoose.set('debug', true);//TODO: for debug only
        // Connect to DB
        // mongoose.connect('mongodb://localhost/trapica');//TODO: DELETE
        var mongoUri = config.getConfigValue('mongo.uri');
        var poolSize = config.getConfigValue('mongo.poolSize');
        mongoose.connect(mongoUri, {
            useMongoClient: true,
            socketTimeoutMS: 360000,
            keepAlive: 30000,
            connectTimeoutMS : 30000,
            poolSize : 30
            // server: {
            //     socketOptions: {
            //         "socketTimeoutMS": 360000,
            //         "keepAlive": 30000,
            //         "connectTimeoutMS" : 30000
            //     }
            // }
        });
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function (callback) { 
          logger.info('Succeed to connect to MongoDB'); 
        });

				// ssl settings(in production ssl is configured by NGINX)
				if (config.getConfigValue('server.https')) {
						var privateKey = fs.readFileSync(config.getConfigValue('server.ssl.private_key'), 'utf8');
						var certificate = fs.readFileSync(config.getConfigValue('server.ssl.certificate'), 'utf8');
						console.log('https: ' + privateKey + ' ' + certificate);//TODO:delete
						server = https.createServer({
								key: privateKey,
								cert: certificate
						}, app);
				} else {
						server = http.createServer(app);
				}
				server.listen(config.getConfigValue('server.port'));
				// ---------------------------------------------------------------------
				// do not remove, comment or change this line, we need it for the tests.
				console.log(constants.MSG_SERVER_UP + ' (PORT', config.getConfigValue('server.port'), ')');
				//----------------------------------------------------------------------
  })
  .catch(function(err) {
    console.error('Message: ' + err.message);
    console.error('type: ' + err.type);
    console.error('stack: ' + err.stack);
  });

module.exports = server;