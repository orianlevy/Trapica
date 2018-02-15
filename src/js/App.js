import React from 'react';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

//Components
import Home from "./components/Guest/Home";
import Pricing from "./components/Guest/Pricing";
import Products from "./components/Guest/Products";
import AIDashboard from "./components/User/Dashboards/AIDashboard";
import RegularDashboard from "./components/User/Dashboards/RegularDashboard";
import GDashboard from "./components/User/Dashboards/GDashboard";
import Create from "./components/User/AdvancedProducts/Create";
import Measure from "./components/User/AdvancedProducts/Measure";
import Predict from "./components/User/AdvancedProducts/Predict";
import CrossPlatforms from "./components/User/AdvancedProducts/CrossPlatforms";
import CrossDevice from "./components/User/AdvancedProducts/CrossDevice";
import MobileAttribution from "./components/User/AdvancedProducts/MobileAttribution";
import MobileInsights from "./components/User/AdvancedProducts/MobileInsights";
import Settings from "./components/User/Admin/Settings";
import Contact from "./components/Guest/Contact";
import Questions from "./components/User/Admin/Questions";
import Plans from "./components/Payment/Plans";
import Premium from "./components/Payment/Premium";
import Business from "./components/Payment/Business";
import Header from "./components/Navigation/Header";
import Footer from "./components/Navigation/Footer";
import OneAndOne from "./components/OneAndOne"; 

const App = () => (
  <Router>
    <div>
        <Route render={({ location }) => (
          <Header location={location}>
            <NavLink to="/aidashboard" activeClassName="active-nav">AI Dashboard</NavLink>
            <NavLink to="/regulardashboard" activeClassName="active-nav">Regular Dashboard</NavLink>
            <NavLink to="/gdashboard" activeClassName="active-nav">Google Dashboard</NavLink>
            <NavLink to="/create" activeClassName="active-nav">Create</NavLink>
            <NavLink to="/measure" activeClassName="active-nav">Measure</NavLink>
            <NavLink to="/predict" activeClassName="active-nav">Predict</NavLink>
            <NavLink to="/crossPlatforms" activeClassName="active-nav">Cross Platforms</NavLink>
            <NavLink to="/crossDevice" activeClassName="active-nav">Cross Device</NavLink>
            <NavLink to="/mobileAttribution" activeClassName="active-nav">Mobile Attribution</NavLink>
            <NavLink to="/mobileInsights" activeClassName="active-nav">Mobile Insights</NavLink>
            <NavLink to="/products" activeClassName="active-nav">Products</NavLink>
            <NavLink to="/settings" activeClassName="active-nav">Settings</NavLink>
            <NavLink to="/pricing" activeClassName="active-nav">Pricing</NavLink>
            <NavLink to="/questions" activeClassName="active-nav">F&Q</NavLink>
            <NavLink to="/contact" activeClassName="active-nav">Contact Us</NavLink>
            <NavLink to="/plans" activeClassName="active-nav">Plans</NavLink>
            <NavLink to="/premium" activeClassName="active-nav">Premium</NavLink>
            <NavLink to="/business" activeClassName="active-nav">Business</NavLink>
            <NavLink to="/" activeClassName="active-nav">Home</NavLink>
          </Header>
        )}/>
        <Route exact path="/" component={Home} />   
        <Route exact path="/pricing" component={Pricing} />    
        <Route exact path="/aidashboard" component={AIDashboard} />
        <Route exact path="/regulardashboard" component={RegularDashboard} />
        <Route exact path="/gdashboard" component={GDashboard} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/measure" component={Measure} />
        <Route exact path="/predict" component={Predict} />
        <Route exact path="/crossPlatforms" component={CrossPlatforms} />
        <Route exact path="/crossDevice" component={CrossDevice} />
        <Route exact path="/mobileAttribution" component={MobileAttribution} />
        <Route exact path="/mobileInsights" component={MobileInsights} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/plans" component={Plans} />
        <Route exact path="/premium" component={Premium} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/OneAndOne" component={OneAndOne} />    


        <Route exact path="/b2c" component={Home} />
        <Route exact path="/b2b" component={Home} />
        <Route exact path="/eCommerce" component={Home} />
        <Route exact path="/marketing" component={Home} />
        <Route exact path="/mobile" component={Home} />
        <Route exact path="/AIAdsOptimization" component={Home} />     
        <Route exact path="/DashboardandReporting" component={Home} />
        <Route exact path="/AdvancedAIProducts" component={Home} />        
      <Footer/>
    </div>
  </Router>

);

export default App;




