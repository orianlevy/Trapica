PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

aws_access_key="AKIAJSCNW5GY54QOPW5Q"
aws_secret_key="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"
credentials="-I $aws_access_key -S $aws_secret_key"
topicARN="arn:aws:sns:us-west-2:024973559276:Trapica"
app=$(lsof -i :9000)
report=$(lsof -i :9001)


# echo "|$app|$report|" >> /usr/local/trapica/app/resources/cron.txt

if [ ${#app} == 0 ]; then
    # echo "$app DOWN" >> /Users/yoavmelamed/dev/my/trapica/app/resources/cron.txt;
    aws sns publish --topic-arn $topicARN --message "URGENT - Application is down"
    cp app/log/appstdout.log app/log/appstdout-$(date +"%Y-%d-%m-%T").log
    LOCAL_CONFIG_FILE=./app/config/app/ui.cfg.json nohup node --max-old-space-size=8192 index.js > ./app/log/appstdout.log 2>&1 &
fi

if [ ${#report} == 0 ]; then
    # echo "$report DOWN" >> /usr/local/trapica/app/resources/cron.txt
    aws sns publish --topic-arn $topicARN --message "URGENT - Reporter is down"
    cp app/log/reportstdout.log app/log/reportstdout-$(date +"%Y-%d-%m-%T").log
    LOCAL_CONFIG_FILE=./app/config/report/ui.cfg.json nohup node --max-old-space-size=16384 index.js > ./app/log/reportstdout.log 2>&1 &
fi
