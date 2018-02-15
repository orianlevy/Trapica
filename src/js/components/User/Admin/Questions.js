import React from "react";
import {connect} from "react-redux";
import "../User.css";
import {setTitle, changeVisitorStatus, showNavigationBar} from "../../../actions/action";

@connect((store) => {
  return {
    isLoggedIn: store.dataReducer.isLoggedIn

  }
})

export default class Questions extends React.Component {

componentWillMount() {
  
  var isLoggedIn=this.props.isLoggedIn;
  if(isLoggedIn == true) {
      this.props.dispatch(changeVisitorStatus(true));
      this.props.dispatch(setTitle("Q&A"));
  }
  else {
    this.props.dispatch(changeVisitorStatus(false));
    this.props.dispatch(setTitle("F&Q"));    
  }

}

render() {
  return ( 
    <div className="content-40mg guest-area">
      <div className="container mt40" styleName="user-container-content">
        <div className="row">
          {/* Begin Content Section */}
          <section className="col-lg-9 col-md-9 col-sm-8">
            {/* Content 1 */}
            <p>Learn how Trapica helps our average customer, reduce acquisition costs by 57% and grow volume by 4x, within 3 months.</p>
            {/* Accordion */}                        
            <div className="panel-group mt20 no-margin" id="accordion">
              {/* Item 1 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                      1. What is Trapica really doing? 
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <p>Trapica is learning on real time about the users that have the conversions and at any moment, Trapica tries to find the best roots to get to them and for the cheapest price. 
                    </p>
                    <p />
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 2 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                      2. How do I activate Trapica on my campaign? 
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p className="no-margin">Just add “Trapica” in the name of the campaign and you are ready to go.
                    </p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 3 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                      3. What changes does Trapica make in the campaigns?
                    </a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Trapica changes the targeting section - interest, behavior and intent segments. We also deal with the bidding if the bidding in the campaign is done manually.</p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 4 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                      4. What should I add in a newly created campaign before adding Trapica?
                    </a>
                  </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Creatives are on you, so add what you feel works best for your business. Also, please make sure to add the location of the campaigns, where you would like it to run. 
                    </p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 5 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                      5. Can I limit the campaign to a specific audience? 
                    </a>
                  </h4>
                </div>
                <div id="collapseFive" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Yes you can. In the campaign name, add (in addition to “Trapica”) - “targeting = Students, woman, car lovers or any other definition and Trapica will make sure to target only those audiences. 
                    </p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 6 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
                      6. Is there any way to measure that the result of my campaign has improved?
                    </a>
                  </h4>
                </div>
                <div id="collapseSix" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Yes, the best way is to open a parallel campaign that is managed by you and see the difference.</p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 7 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">
                      7. How much time does it take to see results?
                    </a>
                  </h4>
                </div>
                <div id="collapseSeven" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>In many cases, its 1 or 2 hours but sometime it also can take a day or 2, depending on the amount of the conversions.
                    </p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 8 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseEight">
                      8. What do you optimize?
                    </a>
                  </h4>
                </div>
                <div id="collapseEight" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>We optimize the campaign’s objectives that you defined in the campaign. It can be app downloads, purchases inside the website, or any other conversion that you define inside your campaign. 
                    </p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 9 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseNine">
                      9.  I’m currently running a campaign and I want Trapica to manage it, is it possible?
                    </a>
                  </h4>
                </div>
                <div id="collapseNine" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Yes, just add “Trapica” to the name of the campaign and Trapica will take it from there.
                    </p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 10 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTen">
                      10. How many ads should I create under the campaign?
                    </a>
                  </h4>
                </div>
                <div id="collapseTen" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>Two is great, we don’t need more than that. 
                    </p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 11 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">
                      11. Do you offer support in manual bidding?
                    </a>
                  </h4>
                </div>
                <div id="collapseEleven" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>We also offer support in manual bidding so the only thing you need to do is change to “manual” inside the campaign account and then add the highest bid you allow and Trapica will play in between 0 to your limits.
                    </p>
                  </div>
                </div>
              </div>{/* /panel */}
              {/* Item 12 */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve">
                      12. Does Trapica make changes only in the campaigns marked with “Trapica”?
                    </a>
                  </h4>
                </div>
                <div id="collapseTwelve" className="panel-collapse collapse">
                  <div className="panel-body">
                    Yes, Trapica can see only campaigns that you added “Trapica” to their names. 
                  </div>
                </div>
              </div>{/* /panel */}
            </div>{/* /accordion */}      
            {/* End Content 1 */}
          </section>
          {/* End Content Section */}
          {/* End Sidebar */}
        </div>{/* /row */}
      </div>{/* /container */}
    </div>
  );
}
}
