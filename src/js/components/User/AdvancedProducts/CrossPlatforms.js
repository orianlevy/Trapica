import React from "react";
import {connect} from "react-redux";
import "../User.css";
import {setTitle, changeVisitorStatus, showNavigationBar} from "../../../actions/action";

@connect((store) => {
  return {
      
  }
})


export default class CrossPlatforms extends React.Component {
  
   
  componentWillMount() {
    this.props.dispatch(changeVisitorStatus(true))
    this.props.dispatch(setTitle("Cross Platforms"))
    this.props.dispatch(showNavigationBar(true))
  }          
  
  render() {
    return (
		<div id="content" className="col-xs-12" styleName="content user-container-content">
            <div className="col-md-4">
                <div className="panel" styleName="panel panel-default">
                    <div styleName="panel-heading">
                        <h4 className="panel-title" styleName="panel-title"><span className="label" styleName="label label-purple m-r-5">Advanced Product</span> </h4>
                    </div>
                    <div className="panel-body" styleName="panel-body">
                        <h3><span styleName="text-purple">Cross Platform</span></h3>
                        <p>With Trapica, you can create one campaign for numerous social networks where Trapica will decide which social platform campaign should be active at various times through the day, let’s not forget the benefits of having targeting optimization, A/B creative optimization and AI targeting bidding in this process. With these, you can achieve the very best conversion rate. <br/> 
                        Please contact Trapica’s customer success team for more info.</p>
                    </div>
                </div>
            </div>					
		</div>
    );
    }
  }