import React from "react";
import {connect} from "react-redux";
import "./Guest.css";
import { NavLink } from 'react-router-dom';
import {setTitle, changeVisitorStatus, showNavigationBar} from "../../actions/action";

@connect((store) => {
  return {
    

  }
})

export default class Home extends React.Component {

componentWillMount() {
  this.props.dispatch(setTitle("Home"))
  this.props.dispatch(changeVisitorStatus(false))
  this.props.dispatch(showNavigationBar(false))
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



  var query = location.search.substring(1);
  if(query!="") {
    var dataForPopup = JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    swal(dataForPopup.status, dataForPopup.message, "error");
  }

  window.history.pushState("", "", '/');

  localStorage.removeItem('access_token');  


  $("#demo-btn").click(function () {
    var name = $("#cname").val();
    var email = $("#cemail").val();
    var company = $("#ccompany").val();
    var phone = $("#ctel").val();

    $.post("/method/demo/request", { name: name, email: email, company: company, phone: phone })
      .done(function (data) {
        $('#demo').modal('hide');
        swal("Thanks You!", "One of our experts will contact you soon to set up a demo call", "success");
      }).fail(function (xhr, textStatus, errorThrown) {
        swal("Oops...", "The message was not sent, please try again", "error");
      });

  });


  var height = $(window).height();
  $(".slide-content").innerHeight(height);

  $("#register").click(function () {
    $('#signup').modal('show');
  });

  $(".team-slider").slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }); 

  //Function to animate slider captions 
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load 
  var $myCarousel = $('#home-carousel'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

  //Initialize carousel 
  $myCarousel.carousel();

  //Animate captions in first slide on page load 
  doAnimations($firstAnimatingElems);

  //Pause carousel  
  $myCarousel.carousel('pause');

  //Other slides to be animated on carousel slide event 
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });

}



render() {
  return (
    <div styleName="tr-homepage homepage-2">
      <div className="tr-main-wrapper" styleName="tr-main-wrapper">
          <div id="tr-home" className="tr-home-slider" styleName="tr-home-slider">
            <div id="home-carousel" className="carousel slide" styleName="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators" styleName="carousel-indicators">
                <li data-target="#home-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#home-carousel" data-slide-to="1"></li>
                <li data-target="#home-carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" styleName="carousel-inner">
                <div className="item active" styleName="item active item1bg">
                  <div className="overlay" styleName="overlay"> </div>
                  <div className="slide-content" styleName="slide-content">
                    <div className="tr-middle" styleName="tr-middle">
                      <div className="tr-feed" styleName="tr-feed">
                        <ul className="pull-right list-inline" styleName="pull-right list-inline">
                          <li>Find Us</li>
                          <li><a href="https://www.facebook.com/Trapica.labs"><i className="fa fa-facebook" styleName="fa fa-facebook"></i></a></li>
                          <li><a href="https://www.linkedin.com/company/13179762/"><i className="fa fa-linkedin" styleName="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                      <div className="container" styleName="container">
                        <div className="row" styleName="row">
                            <div className="home-content text-center" styleName="home-content text-center">
                              <div className=""><a href="index.html"><img className="img-responsive" alt="" /></a></div>
                              <span className="bg-color" styleName="bg-color">World Leader in Targeting automation AI for companies of any size</span>
                              <h1>find who is your target audience</h1>
                              <span className="bg-color" styleName="bg-color">Empower marketing campaigns with autonomous targeting AI marketer </span> <br /> <br /> <a className="btn btn-primary show-demo" styleName="btn btn-primary">Request a Demo </a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-overlay-color" styleName="item item-overlay-color item2bg">
                  <div className="overlay" styleName="overlay"> </div>
                  <div className="slide-content" styleName="slide-content">
                  <div className="tr-middle" styleName="tr-middle">
                      <div className="tr-feed" styleName="tr-feed">
                      <ul className="pull-right list-inline" styleName="pull-right list-inline">
                          <li>Find Us</li>
                          <li><a href="https://www.facebook.com/Trapica.labs"><i className="fa fa-facebook" styleName="fa fa-facebook"></i></a></li>
                          <li><a href="https://www.linkedin.com/company/13179762/"><i className="fa fa-linkedin" styleName="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                      <div className="container">
                        <div className="row">
                            <div className="home-content text-center" styleName="home-content text-center">
                              <div className=""><a href="index.html"><img className="img-responsive" alt="" /></a></div>
                              <span className="bg-color" styleName="bg-color"> World Leader in Targeting automation AI for companies of any size</span>
                              <h1>drive down conversion costs and increase scale</h1>
                              <span className="bg-color" styleName="bg-color">Drive Conversions with the #1 Targeting automation marketing platform</span> <br /> <br /> <a className="btn btn-primary" styleName="btn btn-primary" id="register">Register now</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-overlay-color" styleName="item item-overlay-color item3bg">
                <div className="overlay" styleName="overlay"> </div>
                <div className="slide-content" styleName="slide-content">
                    <div className="tr-middle" styleName="tr-middle">
                    <div className="tr-feed" styleName="tr-feed">
                      <ul className="pull-right list-inline" styleName="pull-right list-inline">
                          <li>Find Us</li>
                          <li><a href="https://www.facebook.com/Trapica.labs"><i className="fa fa-facebook" styleName="fa fa-facebook"></i></a></li>
                          <li><a href="https://www.linkedin.com/company/13179762/"><i className="fa fa-linkedin" styleName="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="home-content text-center" styleName="home-content text-center">
                              <div className=""><a href="index.html"><img className="img-responsive" alt="" /></a></div>
                              <span className="bg-color" styleName="bg-color">World Leader in Targeting automation AI for companies of any size</span>
                              <h1>Target on Facebook, Instagram, Snapchat and other social networks</h1>
                              <span className="bg-color" styleName="bg-color">Become the Empowered AI marketer</span> <a className="btn btn-primary show-demo" styleName="btn btn-primary">Request a Demo</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tr-service" className="tr-service image-bg section-padding" styleName="tr-service image-bg section-padding">
            <div className="container">
            <div className="title"  styleName="title">
                <h1>Solution for every social network marketing \\ need</h1>
              </div>
              <div className="section-info" styleName="section-info">
                <h2>Drive Results with <span>Hyper Dynamic Targeting</span></h2>
              </div>
              <div className="service-content" styleName="service-content">
                <div className="row">
                  <div className="col-sm-3">
                    <div styleName="service icon-1">
                      <img className="img-responsive" src="/assets/images/service/1.png" alt="Service Image" />
                      <h3>Hyper DYNAMIC Targeting</h3>
                      <p>Unveil your target audience With AI that dynamically get your campaigns only the right audience .</p>
                      <NavLink className="btn btn-default" styleName="btn btn-default" to="/products">Learn more <i className="fa fa-chevron-right" aria-hidden="true"></i> </NavLink>                       
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div styleName="service icon-2">
                      <img className="img-responsive" src="/assets/images/service/2.png" alt="Service Image" />
                      <h3>Autonomous Marketing Optimization</h3>
                      <p>Fully autonomous AI for all your marketing needs on social networks.</p>
                      <NavLink className="btn btn-default" styleName="btn btn-default" to="/products">Learn more <i className="fa fa-chevron-right" aria-hidden="true"></i> </NavLink> 
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div styleName="service icon-3">
                      <img className="img-responsive" src="/assets/images/service/3.png" alt="Service Image" />
                      <h3>Social Campaigns Measurement</h3>
                      <p>Measure your marketing campaigns from every social network.</p>
                      <NavLink className="btn btn-default" styleName="btn btn-default" to="/products">Learn more <i className="fa fa-chevron-right" aria-hidden="true"></i> </NavLink> 
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div styleName="service icon-4">
                      <img className="img-responsive" src="/assets/images/service/4.png" alt="Service Image" />
                      <h3>Dynamic AI prediction</h3>
                      <p>Get to audience you never dream of using advanced AI powered prediction.</p>
                      <NavLink className="btn btn-default" styleName="btn btn-default" to="/products">Learn more <i className="fa fa-chevron-right" aria-hidden="true"></i> </NavLink> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tr-team" className="tr-team image-bg section-padding" styleName="tr-team image-bg section-padding">
          <div className="overlay" styleName="overlay"> </div>
            <div className="container">
            <div className="title" styleName="title">
                <h1>FROM HIGH-GROWTH BUSINESS TO LARGE ENTERPRISE</h1>
              </div>
            <div className="section-info" styleName="section-info">
                <h2>Never been a better time to be a <span>marketer</span></h2>
              </div>
              <div className="team-slider" styleName="team-slider">
                <div styleName="team-member"><img className="img-responsive" src="/assets/images/team/1.jpg" alt="Team Image" /></div>
                <div styleName="team-member"><img className="img-responsive" src="/assets/images/team/2.jpg" alt="Team Image" /></div>
                <div styleName="team-member"><img className="img-responsive" src="/assets/images/team/3.jpg" alt="Team Image" /></div>
                <div styleName="team-member"><img className="img-responsive" src="/assets/images/team/4.jpg" alt="Team Image" /></div>
                <div styleName="team-member"><img className="img-responsive" src="/assets/images/team/5.jpg" alt="Team Image" /></div>
              </div>
            </div>
          </div>
          <div id="tr-service" className="tr-service image-bg section-padding" styleName="tr-service image-bg section-padding">
            <div className="container">
              <div className="title" styleName="title">
                <h1>TRUSTED BY THESE AMAZING COMPANIES</h1>
              </div>
              <div styleName="service-content">
                <div className="row">
                  <div className="col-sm-3">
                    <div styleName="service icon-1"><img className="img-responsive" src="/assets/images/service/facebook-1.png" alt="Service Image" /></div>
                  </div>
                  <div className="col-sm-3">
                    <div styleName="service icon-2"><img className="img-responsive" src="/assets/images/service/chat.png" alt="Service Image" /></div>
                  </div>
                  <div className="col-sm-3">
                    <div styleName="service icon-2"><img className="img-responsive" src="/assets/images/service/Xero.png" alt="Service Image" /></div>
                  </div>
                  <div className="col-sm-3">
                  <div styleName="service icon-3"><img className="img-responsive" src="/assets/images/service/dealdash.png" alt="Service Image" /></div>
                  </div>
                  <div styleName="service-content">
                    <div className="row">
                      <div className="col-sm-3">
                        <div styleName="service icon-1"><img className="img-responsive" src="/assets/images/service/Shopify.png" alt="Service Image" /></div>
                      </div>
                      <div className="col-sm-3">
                      <div styleName="service icon-2"><img className="img-responsive" src="/assets/images/service/ign.png" alt="Service Image" /></div>
                      </div>
                      <div className="col-sm-3">
                        <div styleName="service icon-2"><img className="img-responsive" src="/assets/images/service/tweeter.png" alt="Service Image" /></div>
                      </div>
                      <div className="col-sm-3">
                        <div styleName="service icon-3"><img className="img-responsive" src="/assets/images/service/cheetah.png" alt="Service Image" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tr-blog" className="tr-blog image-bg tr-after section-padding" styleName="tr-blog image-bg tr-after section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="left-content" styleName="left-content">
                  <div className="tr-post" styleName="tr-post">
                  <div className="entry-meta" styleName="entry-meta"><span className="time" styleName="time"><a>December 12, NYC</a></span></div>
                    <div className="entry-title" styleName="entry-title">
                      <h2><a>TNW NEW YORK</a></h2>
                    </div>
                    <p>FOR TECHNOLOGY, COMMUNICATION &amp; MEDIA BUSINESSES</p>
                    <a className="btn btn-default show-demo" styleName="btn btn-default">Set Up a Meeting </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
              <div className="right-content" styleName="right-content">
                  <div className="title" styleName="title">
                    <h1>UPCOMING EVENTS</h1>
                  </div>
                  <br /> <br />
                  <div className="tr-post" styleName="tr-post">
                    <div className="entry-meta" styleName="entry-meta"><span className="time" styleName="time"><a> December 4–5, SF</a></span></div>
                    <div className="entry-title" styleName="entry-title">
                      <h2><a>Digital Publishing Innovation Summit</a></h2>
                    </div>
                    <a className="btn btn-default show-demo" styleName="btn btn-default">Set Up a Meeting </a>
                  </div>
                  <div className="tr-post" styleName="tr-post">
                    <div className="entry-meta" styleName="entry-meta"><span className="time" styleName="time"><a> February 6, San Diego</a></span></div>
                    <div className="entry-title" styleName="entry-title">
                      <h2><a>2018 GrowthHackers Conference</a></h2>
                    </div>
                    <a className="btn btn-default show-demo" styleName="btn btn-default">Set Up a Meeting </a>
                  </div>
                  <div className="tr-post" styleName="tr-post">
                    <div className="entry-meta" styleName="entry-meta"><span className="time" styleName="time"><a> JANUARY 14-16, 2018, NYC</a></span></div>
                    <div className="entry-title" styleName="entry-title">
                      <h2><a>NRF 2018, Retail's Big Show</a></h2>
                    </div>
                    <a className="btn btn-default show-demo" styleName="btn btn-default">Set Up a Meeting </a>
                  </div>
                  <a className="btn btn-primary show-demo" styleName="btn btn-primary" > Set a Meeting</a>
                </div>
              </div>
            </div>
          </div>
        </div>       
      </div>
  );
}
}
