import React from "react";
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import "./Navigation.css";
import {setQuestionsLoggedIn} from "../../actions/action";

@connect((store) => {
  return {
    titleName: store.titleReducer.title

  }
})

export default class UserHeader extends React.Component {

componentDidMount() {
  
  App.init();

  $("#signout").click(function(e){
    localStorage.removeItem('access_token');    
  });

  $("#home").click(function(e){
    localStorage.removeItem('access_token');
  });  

  $("#questions").click($.proxy(function(e){
    this.props.dispatch(setQuestionsLoggedIn(true));
  },this))

}

componentDidUpdate(prevProps, prevState) {
  
    var screenWidth = parseInt($('body').width())
      if (screenWidth < 769 &&  $("#user-navbar-toggle").hasClass("active")) {
        $('.navbar-toggle').click()
      }
  
    window.scrollTo(0, 0);
  
  }

setPlansListItem(){
  if ((($("#" + 'questions').length > 0) && ($("#" + 'dashboard').length == 0)) || (this.props.titleName == "Plans")) {
    return (
      <li>
        <NavLink to="/plans" id="plans" activeClassName="active-nav">Plans</NavLink>
      </li>
    );
  }
}

render() {
  return (   
    <div id="user-header"> 
      <div id="page-container" className="page-header-fixed page-sidebar-fixed" styleName="page-header-fixed page-sidebar-fixed">
        <div id="header" className="header navbar navbar-inverse navbar-fixed-top" styleName="header navbar navbar-inverse navbar-fixed-top">			
            <div className="container-fluid">				
            <div className="navbar-header" styleName="navbar-header">
              <NavLink to="/" className="navbar-brand navbar-fix" styleName="navbar-brand navbar-fix" id="home"><b>Trapica Labs .</b></NavLink>
              <button id="user-navbar-toggle" type="button" className="navbar-toggle" styleName="navbar-toggle" data-click="sidebar-toggled">
                <span className="icon-bar" styleName="icon-bar"></span>
                <span className="icon-bar" styleName="icon-bar"></span>
                </button>
              </div>								
            <div className="navbar-xs-justified" styleName="navbar-xs-justified">
              <ul className="nav navbar-nav navbar-right" styleName="nav navbar-nav navbar-right">
                    <li><NavLink to="/" id="signout">Log Out</NavLink></li> 


                </ul>
              </div>				
            </div>
            <div className="header-search-bar" styleName="header-search-bar">
                      <form action="#" method="POST" name="search_bar_form">
                          <div className="form-group">
                <div className="left-icon"><i className="ti-search" styleName="ti-search"></i></div>
                              <input type="text" className="form-control" id="header-search" placeholder="Search infinite admin..." />
                              <a href="javascript:;" data-dismiss="search-bar" className="right-icon" styleName="right-icon"><i className="ti-close" styleName="ti-close"></i></a>
                          </div>
                      </form>
            </div>
          </div>

        <div id="sidebar" className="sidebar sidebar-inverse" styleName="sidebar sidebar-inverse">
            <div data-scrollbar="true" data-height="100%">
            <ul className="nav" styleName="nav">
              <li className="nav-header" styleName="nav-header">Dashboards</li>
                          <li className="active" styleName="active"><NavLink to="/aidashboard" activeClassName="active-nav"><i className="ti-dashboard" styleName="ti-dashboard"></i> AI Dashboard</NavLink></li>
                          <li className="active" styleName="active"><NavLink to="/regulardashboard" activeClassName="active-nav"><i className="ti-bar-chart" styleName="ti-bar-chart"></i> Regular Ads Dashboard</NavLink></li>
                          <li className="active display-hide" styleName="active display-hide"><NavLink to="/gdashboard" activeClassName="active-nav"><i className="ti-layout-media-right" styleName="ti-layout-media-right"></i> Google analytics Dashboard</NavLink></li>      
                <li className="nav-divider" styleName="nav-divider"></li> 
                <li className="nav-header" styleName="nav-header">Advanced Products</li>
                          <li><NavLink to="/create" activeClassName="active-nav"><i className="ti-pencil-alt2" styleName="ti-pencil-alt2"></i>Create</NavLink></li>
                          <li><NavLink to="/measure" activeClassName="active-nav"><i className="ti-layers" styleName="ti-layers"></i>Measure</NavLink></li>
                          <li><NavLink to="/predict" activeClassName="active-nav"><i className="ti-stats-up" styleName="ti-stats-up"></i>Predict</NavLink></li>
                          <li><NavLink to="/crossPlatforms" activeClassName="active-nav"><i className="ti-layout-grid2" styleName="ti-layout-grid2"></i>Cross Platforms</NavLink></li>
                          <li><NavLink to="/crossDevice" activeClassName="active-nav"><i className="ti-layout-media-center-alt" styleName="ti-layout-media-center-alt"></i>Cross Device</NavLink></li>
                          <li><NavLink to="/mobileAttribution" activeClassName="active-nav"><i className="ti-mobile" styleName="ti-mobile"></i>Mobile Attribution</NavLink></li>
                          <li><NavLink to="/mobileInsights" activeClassName="active-nav"><i className="ti-target" styleName="ti-target"></i>Advanced Mobile Insights</NavLink></li>          
                <li className="nav-divider" styleName="nav-divider"></li>
                <li className="nav-header" styleName="nav-header">Admin</li>
                          <li><NavLink to="/settings" activeClassName="active-nav"><i className="ti-settings" styleName="ti-settings"></i>Settings</NavLink></li>
                          <li><NavLink to="/questions" id="questions" activeClassName="active-nav"><i className="ti-help-alt" styleName="ti-help-alt"></i>Q&A</NavLink></li>                    
                <li className="has-sub" styleName="has-sub">
                  
                  <ul className="sub-menu" styleName="sub-menu">
                    <li className="has-sub" styleName="has-sub">
                      <a href="javascript:;">
                              <b className="caret caret-right pull-right" styleName="caret caret-right pull-right"></b>
                              Menu 1.1
                          </a>
                      <ul className="sub-menu" styleName="sub-menu">
                        <li className="has-sub" styleName="has-sub">
                          <a href="javascript:;">
                              <b className="caret caret-right pull-right" styleName="caret caret-right pull-right"></b>
                              Menu 2.1
                          </a>
                          <ul className="sub-menu" styleName="sub-menu">
                            <li><a href="javascript:;">Menu 3.1</a></li>
                            <li><a href="javascript:;">Menu 3.2</a></li>
                          </ul>
                        </li>
                        <li><a href="javascript:;">Menu 2.2</a></li>
                        <li><a href="javascript:;">Menu 2.3</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:;">Menu 1.2</a></li>
                    <li><a href="javascript:;">Menu 1.3</a></li>
                  </ul>
                </li>
              
                
                <li className="nav-divider" styleName="nav-divider"></li>
                <li className="nav-copyright" styleName="nav-copyright">&copy; 2017 Trapica Labs All Right Reserved</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}
}
