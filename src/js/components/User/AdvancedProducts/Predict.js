import React from "react";
import {connect} from "react-redux";
import "../User.css";
import {setTitle, changeVisitorStatus, showNavigationBar} from "../../../actions/action";

@connect((store) => {
  return {
      
  }
})


export default class Predict extends React.Component {
  
   
  componentWillMount() {
    this.props.dispatch(changeVisitorStatus(true))
    this.props.dispatch(setTitle("Predict"))
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
                        <h3><span styleName="text-purple">Predict</span></h3>
                        <p>With Trapica Prediction by your side, you will have one of the most advanced AI algorithms in the industry and you can use it to analyze your users or the conversions of the campaigns. Using the tool, you can learn the future intent of users as well as behavioral segmentations and more. With ongoing campaigns, you can expand the target audience, generate better creatives, and generally improve the position and future success of your campaigns.<br/> 
                        Please contact Trapica’s customer success team for more info.</p>
                    </div>
                </div>
            </div>					
		</div>
    );
    }
  }