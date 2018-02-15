import React from "react";
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import "./Navigation.css";


@connect((store) => {
  return {
    titleName: store.titleReducer.title,
    showGreyNavigation: store.showNavigationReducer.status,

  }
})


export default class GuestHeader extends React.Component {

    
componentDidMount() {

// Auto focus on email in signup modal
$('#login').on('shown.bs.modal', function(e) {
    $('#login-email').focus();
  
    $(document).keypress(function(e) {
        if(e.which == 13) {
            $( "#login-btn" ).click();
        }
    });

});

// Auto focus on email in login modal
$('#signup').on('shown.bs.modal', function(e) {
    $('#signup-email').focus();

  $(document).keypress(function(e) {
        if(e.which == 13) {
            $( "#signup-btn" ).click();
        }
    });    
});



var toggleAffix = function(affixElement, scrollElement, wrapper) {

	var height = affixElement.outerHeight(),
	    top = wrapper.offset().top;

	if (scrollElement.scrollTop() >= top){	  
	    affixElement.addClass("affix");
	}
	else {
	    affixElement.removeClass("affix");
	    wrapper.height('auto');
	}
	  
	};


	$('[data-toggle="affix"]').each(function() {
	var ele = $(this),
	    wrapper = $('<div></div>');

	ele.before(wrapper);
	$(window).on('scroll resize', function() {
	    toggleAffix(ele, $(this), wrapper);
	});

	// init
	toggleAffix(ele, $(window), wrapper);
});
  

function loginProcess() {
    var user = $("#login-email").val();
    var password = $("#login-password").val();

    $.post("/method/login",{ user:user, password:password})
    .done(function(data) {
        if (data.status=="success"){
            window.localStorage.setItem('access_token', data.access_token);
            if (data.route == "dashboard") {
                window.location = '/aidashboard';
            }
            else if (data.route == "plans") {
                window.location = '/plans';
            }
            else if (data.route == "renew") {
                window.location.replace("/method/renew?access_token=" + data.access_token);
            }
        }
        else if (data.status=="error"){
          swal("Oops...", data.message, "error");
        }
    }).fail(function(xhr, textStatus, errorThrown) {
        console.log("Server is down!!")
    });

}

$("#login-btn").click(function(){
  loginProcess();
});


$("#login-password").on('keypress', function (event) {
    if(event.which === 13){
      loginProcess();
    }
});

$("#fb-login-btn").click(function() {
    window.location.replace("/method/login/fb");
});


$("#fb-signup-btn").click(function() {
    fbq('init', '845223705600730');
    fbq('track', "Lead");
    window.location.replace("/method/signup/fb");
});

$("#fb-signup-premium-btn").click(function () {
  fbq('init', '845223705600730');
  fbq('track', "Lead");
  var route = 'premium';
  window.location.replace("/method/signup/fb?route=" + route);
});

$("#fb-signup-business-btn").click(function () {
  fbq('init', '845223705600730');
  fbq('track', "Lead");
  var route = 'business';
  window.location.replace("/method/signup/fb?route=" + route);  
});

$("#signup-btn").click(function() {
  fbq('init', '845223705600730');
  fbq('track', "Lead");

  var user = $("#signup-email").val();

  $.get("/method/signup/validate",{ user:user})
  .done(function(data) {
      return true;
  }).fail(function(xhr, textStatus, errorThrown) {
      $("#lbl-error").html(xhr.responseText);
      return false;
  });
});



}

componentDidUpdate(prevProps, prevState) {

  var screenWidth = parseInt($('body').width())
    if (screenWidth < 769 &&  $(".navbar-collapse").is(":visible")) {
      $('.navbar-toggle').click()
    }

  $(".show-demo").click(function () {
    $('#demo').modal('show');
  });
    
  window.scrollTo(0, 0);
}

render() {
 return (
    <header>
    <div>
      {/* Login */}
      <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <h4 className="modal-title" id="loginLabel">Login</h4>
            </div>
            <div className="modal-body">
              <form role="form">
                <div className="form-group">
                  <label htmlFor="login-email">Email address</label>
                  <input type="email" className="form-control" id="login-email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password">Password</label>
                  <input type="password" className="form-control" id="login-password" placeholder="Password" />
                </div>
              </form>{/* /form */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-block btn-login" styleName="btn-login" id="login-btn">Login</button>
              <button type="button" className="btn btn-block btn-primary" id="fb-login-btn">
                <span className="fa fa-facebook-square" />&nbsp; Login with Facebook
              </button>
            </div>
          </div>{/* /modal content */}
        </div>{/* /modal dialog */}
      </div>{/* /modal holder */}
      {/* End Login */}
      {/* Signup */}
      <div className="modal fade" id="signup" tabIndex={-1} role="dialog" aria-labelledby="signupLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <h4 className="modal-title" id="signupLabel">Sign up</h4>
            </div>
            <div className="modal-body">
              <form role="form" method="post" action="/method/signup">
                <div className="form-group">
                  <label htmlFor="signup-email">Email address</label>
                  <input type="email" className="form-control" id="signup-email" name="signupEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">Password</label>
                  <input type="password" className="form-control" id="signup-password" name="signupPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-company">Company</label>
                  <input type="text" className="form-control" id="signup-company" name="company" placeholder="Company" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-description">Promotion Code</label>
                  <input type="text" className="form-control" id="signup-description" name="description" placeholder="Code" />
                </div>
                <div>
                  <p className="note">By signing up, you agree to our <a href="/assets/files/Trapica - TERMS OF USE.pdf">terms of services and privacy policy.</a></p>
                </div>
                {/*<div>*/}
                <button type="submit" className="btn btn-block btn-login" styleName="btn-login" id="signup-btn">Sign up</button>
                <button type="button" className="btn btn-block btn-primary" id="fb-signup-btn">
                  <span className="fa fa-facebook-square" />&nbsp; Sign up with Facebook
                </button>
                {/*</div>*/}
              </form>{/* /form */}
            </div>
          </div>{/* /modal content */}
        </div>{/* /modal dialog */}
      </div>{/* /modal holder */}
      {/* End Signup */}
      {/* Signup Premium*/}
      <div className="modal fade" id="signup-premium" tabIndex={-1} role="dialog" aria-labelledby="signupPremiumLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <h4 className="modal-title" id="signupPremiumLabel">Sign up</h4>
            </div>
            <div className="modal-body">
              <form role="form" method="post" action="/method/signup">
                <div className="form-group">
                  <label htmlFor="signup-email">Email address</label>
                  <input type="email" className="form-control" id="signup-email" name="signupEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">Password</label>
                  <input type="password" className="form-control" id="signup-password" name="signupPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-company">Company</label>
                  <input type="text" className="form-control" id="signup-company" name="company" placeholder="Company" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-description">Promotion Code</label>
                  <input type="text" className="form-control" id="signup-description" name="description" placeholder="Code" />
                </div>
                <div>
                  <p className="note">By signing up, you agree to our <a href="/assets/files/Trapica - TERMS OF USE.pdf">terms of services and privacy policy.</a></p>
                </div>
                {/*<div>*/}
                <input type="hidden" name="route" value="premium" />
                <button type="submit" className="btn btn-block btn-login" styleName="btn-login" id="signup-btn">Sign up</button>
                <button type="button" className="btn btn-block btn-primary" id="fb-signup-premium-btn">
                  <span className="fa fa-facebook-square" />&nbsp; Sign up with Facebook
                </button>
                {/*</div>*/}
              </form>{/* /form */}
            </div>
          </div>{/* /modal content */}
        </div>{/* /modal dialog */}
      </div>{/* /modal holder */}
      {/* End Signup */}
      {/* Signup Business*/}
      <div className="modal fade" id="signup-business" tabIndex={-1} role="dialog" aria-labelledby="signupBusinessLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <h4 className="modal-title" id="signupBusinessLabel">Sign up</h4>
            </div>
            <div className="modal-body">
              <form role="form" method="post" action="/method/signup">
                <div className="form-group">
                  <label htmlFor="signup-email">Email address</label>
                  <input type="email" className="form-control" id="signup-email" name="signupEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">Password</label>
                  <input type="password" className="form-control" id="signup-password" name="signupPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-company">Company</label>
                  <input type="text" className="form-control" id="signup-company" name="company" placeholder="Company" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-description">Promotion Code</label>
                  <input type="text" className="form-control" id="signup-description" name="description" placeholder="Code" />
                </div>
                <div>
                  <p className="note">By signing up, you agree to our <a href="/assets/files/Trapica - TERMS OF USE.pdf">terms of services and privacy policy.</a></p>
                </div>
                {/*<div>*/}
                <input type="hidden" name="route" value="business" />
                <button type="submit" className="btn btn-block btn-login" styleName="btn-login" id="signup-btn">Sign up</button>
                <button type="button" className="btn btn-block btn-primary" id="fb-signup-business-btn">
                  <span className="fa fa-facebook-square" />&nbsp; Sign up with Facebook
                </button>
                {/*</div>*/}
              </form>{/* /form */}
            </div>
          </div>{/* /modal content */}
        </div>{/* /modal dialog */}
      </div>{/* /modal holder */}
      {/* End Signup */}       
      {/* Demo */}
      <div className="modal fade" id="demo" tabIndex={-1} role="dialog" aria-labelledby="demoLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <h4 className="modal-title" id="demoLabel">Request a Demo</h4>
            </div>
            <div className="modal-body">
              <form role="form" method="post" action="/method/signup">
                <div className="form-group">
                   <label htmlFor="signup-email">Full name</label>
                   <input type="text" className="form-control" id="cname" name="name" placeholder="George Washington" />
                </div>
                <div className="form-group">
                   <label htmlFor="signup-password">Mail</label>
                   <input type="email" className="form-control" id="cemail" name="email" placeholder="George@Washington.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-description">Phone</label>
                  <input type="phone" className="form-control" id="ctel" name="phone" placeholder="+ 1 (929) 258 1448" />
                </div> 
                <div className="form-group">
                  <label htmlFor="signup-company">Company</label>
                  <input type="text" className="form-control" id="ccompany" name="company" placeholder="Washington company" />
                </div>
                {/*<div>*/}
                <button type="button" className="btn btn-block btn-login" styleName="btn-login" id="demo-btn">Get Started </button>
                {/*</div>*/}
              </form>{/* /form */}
            </div>
          </div>{/* /modal content */}
        </div>{/* /modal dialog */}
      </div>{/* /modal holder */}
      {/* End Demo */}      
      {/* Begin Navigation */}
      <div className="navbar-wrapper">
        <div className="navbar navbar-main" data-toggle="affix" id="fixed-navbar">
          <div className="container-header">
            <div className="row">
              <div className="col-sm-12 column-header">
                <div className="navbar-header">
                  {/* Brand */}
                  <NavLink to="/"className="navbar-brand">  
                    <img src="/assets/images/New Logo Trapica.png" className="trapica-logo" alt="Trapica Logo" />
                  </NavLink>
                  {/* Mobile Navigation */}
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>{/* /navbar header */}
                {/* Main Navigation - Explained in Documentation */}
                <nav className="navbar-collapse collapse navHeaderCollapse" role="navigation">
                  <ul className="nav navbar-nav navbar-right">  
                    <li>
                      <NavLink to="/products" activeClassName="active-nav">Product</NavLink>
                    </li>                                                                            
                    <li>
                      <NavLink to="/pricing" activeClassName="active-nav">Pricing</NavLink>
                    </li>
                    <li>
                      <a href="http://aiblog.trapica.com">Blog</a>
                    </li> 
                    <li className="dropdown dropdown-main">
                      <a data-toggle="modal" data-target="#login">Login</a>
                    </li>
                    <li className="dropdown dropdown-main">
                       <a className="sign-up-button" data-toggle="modal" data-target="#signup">Start a Free Trial</a>
                    </li>
                  </ul>{/* /navbar right */}
                </nav>{/* /nav */}
              </div>
            </div>
          </div>{/* /container header */}
        </div>{/* /navbar */}
      </div>{/* /navbar wrapper */}
      {/* End Navigation */}
    </div>
    </header>
  );
 }
}
