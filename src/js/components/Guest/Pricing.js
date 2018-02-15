import React from "react";
import {connect} from "react-redux";
import "./Guest.css";
import {setTitle, changeVisitorStatus, showNavigationBar} from "../../actions/action";

@connect((store) => {
  return {
    

  }
})

export default class Pricing extends React.Component {

componentWillMount() {
    
  this.props.dispatch(setTitle("Pricing"))
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

    $("#premium").click(function(){
      $('#signup-premium').modal('show'); 
    });

    $("#business").click(function(){
      $('#signup-business').modal('show'); 
    });
}

render() {
  return (
    <div id="tr-pricing" styleName="tr-pricing image-bg section-padding"> 
      <div styleName="overlay"></div>
      <div className="container text-center"> 
        <div styleName='section-title'>
          <h1>Trapica's Pricing</h1>
        </div>
        <div styleName='section-info'>
          <p>Target without technology is like driving without Wheels <br />Start now with 14 days of free trial </p>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div styleName="price">
              <h2>Premium</h2>
              <h3>$649/mo</h3>
              <ul styleName='tr-list'>
                <li>Up to $10K Ads Spending per month</li>
                <li>Unlimited number of ads</li>
                <li>5 ads accounts</li>
                <li>30 days money back guarantee</li>
                <li></li>
              </ul>
              <a className="btn btn-primary" styleName="btn btn-primary" id="premium">START A FREE TRIAL <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
          </div>

          <div className="col-sm-4">
            <div styleName="price active">
              <h2>Business</h2>
              <h3>$1649/mo</h3>
              <ul styleName="tr-list">
                <li>Up to $30K Ads Spending per month</li>
                <li>Unlimited number of ads</li>
                <li>Unlimited ads accounts </li>
                <li>
                  Insights analytics   </li>
                <li>30 days money back guarantee</li>
              </ul>
              <a className="btn btn-primary" styleName="btn btn-primary" id="business">START A FREE TRIAL <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
          </div>

          <div className="col-sm-4">
            <div styleName="price">
              <h2>Enterprise</h2>
              <h3></h3>
              <ul styleName="tr-list">
                <li>Unlimited budget spend  </li>
                <li>Unlimited number of ads</li>
                <li>Unlimited ads accounts</li>
                <li></li>
                <li>Includes All Business Features</li>
              </ul>
              <a className="btn btn-primary show-demo" styleName="btn btn-primary" id="enterprise">Get a Quote<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}



