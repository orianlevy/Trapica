import React from "react";
import {connect} from "react-redux";
import "./Guest.css";
import {setTitle, changeVisitorStatus, showNavigationBar} from "../../actions/action";

@connect((store) => {
  return {
    

  }
})

export default class Contact extends React.Component {

componentWillMount() {
    
  this.props.dispatch(setTitle("Contact Us"))
  this.props.dispatch(changeVisitorStatus(false))
  this.props.dispatch(showNavigationBar(true))

}

componentDidMount() {

  //Google Pixel
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72964865-1', 'auto');
  ga('send', 'pageview');


  //Facebook Pixel
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', '845223705600730');
  fbq('track', "ViewContent");
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=396101353899091&ev=PageView&noscript=1"/>

    var map;

    map = new GMaps({
      el: '#gmap',
      lat: 40.741895,
      lng: -73.989308,
      scrollwheel: false,
      zoom: 15,
      zoomControl: false,
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false,
      clickable: false
    });

    var styles = [

      {
        "featureType": "road",
        "stylers": [
          { "color": "#faffff" }
        ]
      }, {
        "featureType": "water",
        "stylers": [
          { "color": "#8dc2ec" }
        ]
      }, {
        "featureType": "landscape",
        "stylers": [
          { "color": "#ebe4db" }
        ]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#ff00ff" }
        ]
      }, {
        "featureType": "poi",
        "stylers": [
          { "color": "#d2e9ad" }
        ]
      }, {
        "elementType": "labels.text",
        "stylers": [
          { "saturation": 1 },
          { "weight": 0.1 },
          { "color": "#101010" }
        ]
      }

    ];

    map.addStyle({
      styledMapName: "Styled Map",
      styles: styles,
      mapTypeId: "map_style"
    });

    map.setStyle("map_style");
       

  $("#send-message").click(function(e){
        e.preventDefault();
        var name = $("#contact-name").val();
        var email = $("#contact-email").val();
        var message = $("#contact-message").val();

        $.post("/method/contact",{ name:name, email:email, message:message})
        .done(function(data) {
          $("#contact-form")[0].reset();
          $("#lbl").html(data);
            swal("The message was sent!", "Thank you for contacting Trapica", "success");
        }).fail(function(xhr, textStatus, errorThrown) {
            swal("Oops...", "The message was not sent, please try again", "error");
        });

    });
}

render() {
  return (
    <div className="mt40" styleName="tr-main-wrapper"> 
      <div styleName="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 tr-sticky">  
              <div styleName="tr-left-contant left-contant-before">
                <div styleName="page-title">  
                  <h1>Say Hi</h1>
                </div>
                <h2></h2>
                <address>
                  <p>Adress: <span> 50 W 17th St, <br />New York 10011</span></p>
                  <p>Email: <span><a href="#">Hello@trapica.com</a></span></p>
                </address>
                <ul className="list-inline" styleName="contact-social">  
                  <li><a href="https://www.facebook.com/Trapica.labs"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/13179762/"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-9 tr-sticky">
              <div className="theiaStickySidebar">
                <div id="gmap"></div>
                <div styleName="feedback">
                  <div styleName="section-title">
                    <h1>We’d love to hear from you</h1>
                  </div>
                  <form id="contact-form" className="contact-form" name="contact-form">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <input id="contact-name" type="text" className="form-control" styleName="form-control" required="required"  placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <input id="contact-email" type="email" className="form-control" styleName="form-control" required="required" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea id="contact-message" required="required" className="form-control" styleName="form-control" rows="7" placeholder="Enter your text"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" id="send-message" styleName="btn btn-primary">Contact<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                    </div> 
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
