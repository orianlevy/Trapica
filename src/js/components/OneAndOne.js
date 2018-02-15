import React from "react";
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom';


@connect((store) => {
  return {
    

  }
})

export default class OneAndOne extends React.Component {

  componentDidMount() {

    var x = document.getElementById('hiddenArea');
    x.style.display = 'none'; 
    
    $('#social-media-select').multiselect({
     includeSelectAllOption: true
    });

    $('#social-media-select option').prop('selected', true) 
    $('#social-media-select').multiselect ('refresh')

    $('.input-daterange').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        multidate: false
    });    

    $('[data-toggle="tooltip"]').tooltip();

    $("#budgetInput").on("change paste keyup", function() {
       var budget = $(this).val();

       if (budget==='') {
          $('#numOfClicks').html(0);
          return false;
       }

       var gaugeValue = budget * 2000;
       var meter = document.getElementById('amountMeter');
       meter.value = gaugeValue;

       var min = gaugeValue-500;
       var max = gaugeValue+500;
       $('#numOfClicks').html(min.toLocaleString() + '-' + max.toLocaleString());
    });    

    $('#start-campaign-btn').click(function(e) {
        var form = document.getElementById('magicButtonForm');
          for(var i=0; i < form.elements.length; i++){
            if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
                swal("Please fill all the required fields", " ", "error");
                return false              
            }
          }
          swal("Thank you for creating marketing campaign with 1&1", " ", "success");
    });     

    $('.advancedSettingsButton').click(function(e) {
       var x = document.getElementById('hiddenArea');
        if (x.style.display === 'none') {
            x.style.display = 'block';
            $('#start-campaign-btn').appendTo('#buttonPlaceholderHidden');
        } else {
            x.style.display = 'none';  
            $('#start-campaign-btn').appendTo('#buttonPlaceholderShown');
        }        
    }); 

  }

  render() {
    return (
        <div id="container_front">  
            <img src="/assets/images/OneAndOne.png" className="img-responsive"/>
            <div id="front_like">
              <img src="/assets/images/promote.png"  className="promoteOne" data-toggle="modal" data-target="#magicButtonModal" />
            </div>   
            {/* Modal */}
                <div id="magicButtonModal" className="modal fade" role="dialog">
                  <div className="modal-dialog OneAndOneModal">
                    <form id="magicButtonForm">
                    {/* Modal content*/}
                    <div className="modal-content OneTextColor col-xs-12">
                      <div className="modal-body col-xs-12">
                        <div className="row">
                          <div className="col-xs-6">
                            <h4>Campaign Definitions</h4>
                          </div>
                          <div className="col-xs-6 text-right no-padding">
                            <div className="col-xs-11 no-padding">
                              <h4>Estimated daily clicks</h4>
                            </div>
                            <div className="col-xs-1 no-padding">
                              <img src="/assets/images/information.png" className="dashboard-heading-information small-info" data-placement="bottom" data-toggle="tooltip" 
                                title="The accuracy of estimates is based on factors like the budget you entered and market data" alt="Information" />                          
                            </div>                 
                          </div>  
                        </div>
                        <div className="mt20 mb20 row">
                          <div className="col-xs-8">
                            <div className="row">
                              <div className="col-xs-6">
                                <h5>Platforms to run</h5>
                              </div>
                              <div className="col-xs-6">
                                <select className="form-control col-sm-4 checkout-form-border" id="social-media-select" name="socialMedia" multiple="multiple">
                                  <option value="facebook">Facebook</option>
                                  <option value="instagram">Instagram</option>
                                  <option value="google">Google</option>
                                  <option value="linkedin">LinkedIn</option>
                                  <option value="pinterest">Pinterest</option>
                                  <option value="apple">Apple App store search</option>
                                  <option value="twitter">Twitter</option>
                                  <option value="youtube">Youtube</option>
                                  <option value="playstore">Google Play Store search ads</option>
                                  <option value="android">Android mobile ad networks</option>
                                  <option value="ios">IOS mobile ad networks</option>
                                </select>                              
                              </div> 
                            </div>    
                            <div className="row mt20">
                              <div className="col-xs-6">
                                <h5>Total Budget</h5>
                              </div>
                              <div className="col-xs-6">
                                <div class="form-group has-feedback2">
                                  <input type="text" id="budgetInput" class="form-control" defaultValue="100" required/>
                                  <i class="form-control-feedback2 fa fa-dollar"></i>
                                </div>                                
                              </div> 
                            </div>  
                            <div className="row mt20">
                              <div className="col-xs-6">
                                <h5>Duration</h5>
                              </div>
                              <div className="col-xs-6">
                                <div className="input-daterange input-group" id="datepicker">
                                    <input type="text" className="input-sm form-control" name="start" required />
                                    <span className="input-group-addon">-</span>
                                    <input type="text" className="input-sm form-control" name="end" required />
                                </div>                                
                              </div> 
                            </div>                                                                                
                          </div>
                          <div className="col-xs-4 text-center noPaddingRight">
                            <h5 className="mb-0 textForGauge"><span id="numOfClicks">199,500-200,500</span>(of 22,000,000)</h5>
                            <meter id="amountMeter" className="gaugeLine" value="200000" min="0" max="22000000"></meter>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-8 advancedSettings">
                            <h5 className="advancedSettingsButton">Advanced settings</h5>
                          </div>
                          <div className="col-xs-4" id="buttonPlaceholderShown">
                            <input type="submit" id="start-campaign-btn" className="btn btn-rw btn-primary btn-lg" data-dismiss="modal" value="Start Campaign"/>
                          </div>                                                    
                        </div>   
                        <div className="mt20 row" id="hiddenArea">
                          <div className="col-xs-8">  
                            <div className="row mt20">
                              <div className="col-xs-6">
                                <h5>Campaign Headline</h5>
                              </div>
                              <div className="col-xs-6">
                                <textarea></textarea>                               
                              </div> 
                            </div>  
                            <div className="row mt20">
                              <div className="col-xs-6">
                                <h5>Limit daily leads number</h5>
                              </div>
                              <div className="col-xs-6">
                                <input type="text" />                              
                              </div> 
                            </div>                                                                                
                          </div>
                          <div className="col-xs-4" id="buttonPlaceholderHidden">

                          </div>
                        </div>
                      </div>                      
                    </div>
                    </form>
                  </div>
                </div>                   
        </div>
      
    )
  }
}
