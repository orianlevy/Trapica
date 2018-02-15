import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";

export default class GuestFooter extends React.Component {

  render() {
    return (
      <div styleName="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div styleName="footer-widget">
                <div styleName="footer-logo">
                  <li><NavLink to="/"><img className="img-responsive" src="/assets/images/footer-logo.png" alt="Logo" /></NavLink> </li>                  
							</div>
                <div styleName="copyright">
                    <p>&copy; 2017 Trapica Labs. <a href="http://trapica.com/assets/files/Trapica%20-%20TERMS%20OF%20USE.pdf">Terms & conditions</a> | <a href="http://trapica.com/assets/files/Trapica%20-%20TERMS%20OF%20USE.pdf">Privacy Policy</a></p>
                  </div>
                </div>
              </div>

              <div className="col-sm-2">
              <div styleName="footer-widget">
                  <h3>Product</h3>
                  <ul styleName="tr-list">
                    <li><NavLink to="/"><p>Home</p></NavLink> </li>
                    <li><NavLink to="/products"><p>Product</p></NavLink></li>
                    <li><NavLink to="/pricing"><p>Pricing</p></NavLink></li>
                    <li><a className="show-demo">Request a demo</a></li>
                    
                  </ul>
                </div>
              </div>

              <div className="col-sm-2">
              <div styleName="footer-widget">
                  <h3>Our Company</h3>
                  <ul styleName="tr-list">
                    <li><a href="http://aiblog.trapica.com/">Blog</a></li>
                    <li><NavLink to="/contact"><p>Contact us</p></NavLink></li>                                                    
                  </ul>
                </div>
              </div>

              <div className="col-sm-2">
              <div styleName="footer-widget">
                  <h3>Social</h3>
                  <ul styleName="tr-list">
                    <li><a href="https://www.facebook.com/Trapica.labs">Facebook</a></li>                    
                    <li><a href="https://www.linkedin.com/company/13179762/">Linkedin</a></li>
                  </ul>
                </div>
              </div>              

            </div>
          </div>
        </div>
    );
  }
}
