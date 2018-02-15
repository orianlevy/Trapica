import React from "react";
import {connect} from "react-redux";
import "../User.css";
import {setTitle, fetchDataForAdmin, accountIdChange, changeVisitorStatus, showNavigationBar, fetchDataforSetting, googleConnectCheckIfSigned} from "../../../actions/action";

@connect((store) => {
  return {
    dataForSelectList: store.dataReducer.data,  
    fetchSetting: store.dataReducer.fetchSettings,
    isSignedGoogle: store.dataReducer.isSignedGoogle
  }
})

export default class Settings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        userEmail: ''
    };
}
   
  componentWillMount() {
    this.props.dispatch(changeVisitorStatus(true))
    this.props.dispatch(setTitle("Settings"))
    this.props.dispatch(showNavigationBar(true))
  }
  
componentDidMount() {
  
  
    var query = location.search.substring(1);
    if(query!="") {
      if (query==="google")
      {
        $(".google-connect-btn").removeClass("invisible")
      }
      else{
        var dataForPopup = JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
        if (dataForPopup.status=='succeed') {
          swal(dataForPopup.status, dataForPopup.message, "success");
        }
        else {
          swal(dataForPopup.status, dataForPopup.message, "error");
        }
      }
  
    }
  
  
    window.history.pushState("", "", '/settings');
  
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
    fbq('track', "Admin");
  
    <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=396101353899091&ev=PageView&noscript=1"/>
  
  
    var access_token = window.localStorage.getItem('access_token');
    if (access_token == null) { //TODO: change for better solution
        access_token = location.search.split('access_token=')[1];
        window.localStorage.setItem('access_token', access_token);
  
    }
  
    this.props.dispatch(googleConnectCheckIfSigned(access_token));
    this.props.dispatch(googleConnectCheckIfSigned(access_token));
  


    $(".google-connect-btn" ).click($.proxy(function(e){ 
        this.props.dispatch(googleConnectCheckIfSigned(access_token));
        var isSignedGoogleJson = this.props.isSignedGoogle;
        if (isSignedGoogleJson.status!="success" && isSignedGoogleJson!=undefined) {
          swal("An Error has occurd")
          return;
        }
        else {
          if (isSignedGoogleJson.active==true) {
            swal("You are already connected to Google", "Click ok to continue", "success");
          }
          else {
            window.location.replace("/method/g/oauth/auth/?access_token=" + access_token);
          } 
        }
        
    },this));
  
  
    this.props.dispatch(fetchDataforSetting(true));
  }
  
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchSetting) {
        var access_token = window.localStorage.getItem('access_token');
        this.props.dispatch(fetchDataForAdmin(access_token));
        this.props.dispatch(fetchDataforSetting(false));
    }

    if (nextProps.isSignedGoogle!=undefined) {
      var isSignedGoogleJson = nextProps.isSignedGoogle;
      
      if (isSignedGoogleJson.status=="success" && isSignedGoogleJson.active==true) {
        $(".google-connect-status").text("On")
      }
    }
    
    if(nextProps.dataForSelectList!=undefined) {
      this.setState({
        userEmail: nextProps.dataForSelectList.email
      });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    function updateSelectList(data,access_token) {
        var selectList = '<select class="form-control col-sm-4 checkout-form-border selectpicker" data-actions-box="true" data-live-search="true" name="account_ids" id="account_ids" multiple required>';
        $.each(data.accounts, function( key, item ) {
            var accName = item.id;
            if (item.name && item.name != '') {
                accName = item.name + ' - ' + item.id;
            }
  
            selectList += '<option class="account-id-option" value="' + item.id + '" ';
            if (item.active){
                selectList += 'selected';
            }
            selectList += '>' + accName + '</option>'
        });
        selectList += "</select>";
        $('#account-id-div').html(selectList +
        '<div class="col-sm-12 text-center"><button type="button" class="btn btn-rw btn-primary updateButton" name="account-id-change" id="account-id-change" style="margin-top: 5px;">Update</button></div>');
  
        // event to change the account_ids status
        $("#account-id-change").click($.proxy(function(e){ 
  
          const searchParams = new URLSearchParams();
  
          $("#account_ids option:selected").each(function (index) {
            searchParams.append("account_ids", $(this).val());                 
            });
          
          if (searchParams.toString()=="") {
            searchParams.append("account_ids", null);  
          }
          
          this.props.dispatch(accountIdChange(access_token,searchParams));
              
  
          swal("The account was updated!", "Click ok to continue", "success");
      },this));
  
  }
    
    var access_token = window.localStorage.getItem('access_token');
    var data=this.props.dataForSelectList;
    if (data!=undefined) {
      updateSelectList.bind(this)(data,access_token);
    }
  
    $('.selectpicker').selectpicker({
  
    });


    $( ".facebook-account-edit" ).click(function() {
      $(".setting-form-div").removeClass("invisible")
    });

  }  
  
  render() {
    return (
      <div id="content" className="col-xs-12" styleName="content user-container-content">
        <h1 styleName="page-header">
          Settings <small></small>
        </h1>
        <ul styleName="setting-list">
          <li styleName="setting-title">GENERAL</li>
                                
          <li>
            <div styleName="field">Email</div>
            <div styleName="value">{this.state.userEmail}</div>
            <div styleName="action">
            </div>
          </li>
          
            
          <li styleName="setting-title">Social Networks and Accounts</li>
          <li styleName="settings-li-width">
            <div styleName="field">Please select your Facebook accounts to manage</div>
            <div styleName="value setting-form-div" className="setting-form-div invisible">
              <form className="form-horizontal setting-form">
                <fieldset>
                  <div className="form-group">
                    <div className="text-center">
                      <div id="account-id-div" />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div styleName="action">
              <a href="#" className="btn btn-default btn-sm facebook-account-edit">Edit</a>
            </div>
          </li>  
          <li styleName="settings-li-width">        
            <div styleName="field">Google Ads</div>
            <div styleName="value"><b styleName="text-success" className="google-connect-status">Off</b></div>
            <div styleName="action" className="google-connect-btn invisible">
              <a href="#" className="btn btn-default btn-sm google-connect">Connect</a>
            </div>
          </li>
        
        </ul>
        <div styleName="settings-platforms">
              <form role="form" method="post" action="/method/g/oauth/auth/" className="google-connect">
                {/*<div>*/}
                <button type="submit" className="btn btn-block btn-login" id="signup-btn">Sign up</button>
                <button type="button" className="btn btn-block btn-primary" id="google-signup-btn">
                  <span className="fa fa-facebook-square" />&nbsp; Sign up with Facebook
                </button>
                {/*</div>*/}
              </form>{/* /form */}
          </div>
      </div>
    );
    }
  }