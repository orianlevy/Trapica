import React from "react";
import {
    connect
} from "react-redux";
import "../User.css";
import {
    setTitle,
    changeVisitorStatus,
    showNavigationBar,
    fetchDataForDashboard,
    fetchBreakdownsForDashboardOptimized,
    initDashboardButtonOptimized,
    renderBreakdowns
} from "../../../actions/action";


@connect((store) => {
    return {
        renderBreakdowns: store.dataReducer.renderBreakdowns,
        campaignsDataAPI: store.dataReducer.data,
        campaignsBreakdownAPI: store.dataReducer.breakdown,
    }
})

export default class AIDashboard extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            campaignsBreakdowns: [{periodText: "Last 7 days"}],
            generalBreakdowns: [{periodText: "Last 7 days"}],
            campaignsDataForTable: [],            
            total_7d_conversions: 0,
            total_7d_average_optimization: 0,
            total_7d_budget: 0,
            total_7d_saved_money: 0,
            total_30d_conversions: 0,
            total_30d_average_optimization: 0,
            total_30d_budget: 0,
            total_30d_saved_money: 0
        };
    }

    componentWillMount() {
        this.props.dispatch(setTitle("AIDashboard"))
        this.props.dispatch(changeVisitorStatus(true))
        this.props.dispatch(showNavigationBar(true))
    }
            

    componentDidMount() {
        
        
        //Google Pixel
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-72964865-1', 'auto');
        ga('send', 'pageview');


        //Facebook Pixel
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window,
            document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '845223705600730');
        fbq('track', "Dashboard");

        <
        img height = "1"
        width = "1"
        style = "display:none"
        src = "https://www.facebook.com/tr?id=396101353899091&ev=PageView&noscript=1" / >


        var query = window.location.search.substring(1);
        var vars = query.split("=");
        if (vars[1] != undefined) {
            window.localStorage.setItem('access_token', vars[1]);
        }


        var access_token = window.localStorage.getItem('access_token');
        if (access_token == null) { //TODO: change for better solution
            access_token = location.search.split('access_token=')[1];
            window.localStorage.setItem('access_token', access_token);
        }

        window.history.pushState("", "", '/aidashboard');        

        $('.btn-group .btn').click( function() {
            $(this).addClass('active').siblings().removeClass('active');        
          });

        $('.btn-group .btn').click( function() {
            var currTableRadio = document.querySelector('input[name="table_radio"]:checked')
            this.props.dispatch(renderBreakdowns(Math.random()))            
            if (this.props.campaignsBreakdownAPI!=undefined) {                                           
                if (currTableRadio!=null) {                        
                    var radioIndex = currTableRadio.value
                    new Promise(resolve => setTimeout(() => resolve( 
                        $("#table_radio_"+radioIndex).prop("checked", true)
                    ), 1000));                 
                }else {                    
                    new Promise(resolve => setTimeout(() => resolve( 
                        $("#table_radio_0").prop("checked", true).trigger("click")
                    ), 1000));                      
                }
            }                       
        }.bind(this));          
               

        function initializeData() {
            var data = this.props.campaignsDataAPI;        

            if (!data || data == "") {
                return;
            } 

            var campaignsArray = data.campaigns;              
            var indexForAPI = 0;            
            Promise.all(
                campaignsArray.map(campaignItem => {
                    if (campaignItem!=null) {                        
                        this.props.dispatch(fetchBreakdownsForDashboardOptimized(access_token, campaignItem.id, indexForAPI))
                        indexForAPI++                        
                    }
                    if (campaignsArray.length==indexForAPI) {
                        this.props.dispatch(initDashboardButtonOptimized())
                    }
                })
            );
        }    

        var initializeDataThis = initializeData.bind(this);            

        $(".dashboard-default-button").click();

        this.props.dispatch(fetchDataForDashboard(access_token));  

        new Promise(resolve => setTimeout(() => resolve( 
            initializeDataThis()
        ), 1000));        
     

    }    

    componentWillReceiveProps(nextProps) {                 
        function extractBreakdownFromArr(breakdownsArr, isGeneralBreakdowns) {
            breakdownsArr.forEach(function(element) {                                           
                
                //Start Data Extraction
                var conversionsArray = new Array();
                var conversionsArrayCreative = new Array();
                var conversionsArrayAge = new Array();
                var conversionsArrayGender = new Array();
                var conversionArrayPAD = new Array();
                var conversionArrayCountry = new Array();
                var conversionArrayType = new Array();
                var conversionArrayChannel = new Array();

                if(element!=null){
                    if (element[periodFix7Days]!=undefined) {
                        conversionsArray = element[periodFix7Days].conversions;
                        conversionsArrayCreative = element[periodFix7Days].creative;
                        conversionsArrayAge = element[periodFix7Days].age;
                        conversionsArrayGender = element[periodFix7Days].gender;
                        conversionArrayPAD = element[periodFix7Days].placement;
                        conversionArrayCountry= element[periodFix7Days].country;
                        conversionArrayType= element[periodFix7Days].type;
                        conversionArrayChannel= element[periodFix7Days].channel;
                    }               
                    else{
                        conversionsArray=[];
                        conversionsArrayCreative=[];
                        conversionsArrayAge=[];
                        conversionsArrayGender=[];
                        conversionArrayPAD=[];
                        conversionArrayCountry=[];
                        conversionArrayType=[];
                        conversionArrayChannel=[];
                    }
                }
                else{
                    conversionsArray=[];
                    conversionsArrayCreative=[];
                    conversionsArrayAge=[];
                    conversionsArrayGender=[];
                    conversionArrayPAD=[];
                    conversionArrayCountry=[];
                    conversionArrayType=[];
                    conversionArrayChannel=[];
                }

                if (conversionsArray==undefined)
                    conversionsArray=[] ;
                if (conversionsArrayCreative==undefined)
                    conversionsArrayCreative=[] ;
                if (conversionsArrayAge==undefined)
                    conversionsArrayAge=[];         
                if (conversionsArrayGender==undefined)
                    conversionsArrayGender=[];                                               
                if (conversionArrayPAD==undefined)
                    conversionArrayPAD=[];        
                if (conversionArrayCountry==undefined)
                    conversionArrayCountry=[];    
                if (conversionArrayType==undefined)
                    conversionArrayType=[];       
                if (conversionArrayChannel==undefined)
                    conversionArrayChannel=[];                                                                                           
                
                var conversionsXAxis = new Array();    
                var conversionsYAxis = new Array();                             
                var creativeXAxis = new Array();
                var creativeXAxisCut = new Array();
                var creativeYAxis = new Array();                    
                var ageXAxis = new Array();                    
                var ageYAxis = new Array();
                var genderMaleFemaleXAxis = new Array();
                var genderMaleYAxis = new Array();
                var genderFemaleYAxis = new Array();                  
                var placementXAxis = new Array();                    
                var placementYAxis = new Array();
                var countryXAxis = new Array();    
                var countryYAxis = new Array();
                var typeXAxis = new Array();    
                var typeYAxis = new Array();
                var channelXAxis = new Array();    
                var channelYAxis = new Array();     
                            


                //Create data for conversions graph                    
                conversionsArray.forEach(function(item, k) {
                    var date = item.date;
                    var endDate = new Date(date);
                    var dd = endDate.getDate();
                    var endDate = new Date(date);
                    var mm = endDate.getMonth() + 1; //January is 0!
                    var conversionDate = dd + '/' + mm;
                    conversionsXAxis[k] = conversionDate;
                    conversionsYAxis[k] = parseInt(item.actions);                  
                });
                            

                //Create data for creative graph                    
                if (conversionsArrayCreative != undefined && conversionsArrayCreative.length > 0) {	                                  	
                    conversionsArrayCreative.forEach(function (item, index){
                        if (item.conversions != '' && item.creative != '') {                                    
                            creativeXAxis[index] = item.creative;
                            creativeXAxisCut[index] = item.creative.substr(0, 12);
                            creativeYAxis.push(parseInt(item.conversions));                                                  
                            }
                        }); 		     
                }                 

                //Create data for age graph
                conversionsArrayAge.forEach(function(item, k) {                        
                    ageXAxis.push(item.age);
                    if (item.conversions != '') {                            
                        ageYAxis.push(parseInt(item.conversions));                            
                    } else {
                        ageYAxis.push(null);                            
                    }
                });                    
                
                //Create data for gender graph
                conversionsArrayGender.forEach(function(item, k) {
                    if (item.conversions != '') {                            
                        if (item.gender == "male") {
                            genderMaleYAxis.push(parseInt(item.conversions));                                
                        } else if (item.gender == "female") {
                            genderFemaleYAxis.push(parseInt(item.conversions));                                
                        }
                    } else {
                        if (item.gender == "male") {
                            genderMaleYAxis.push(null);                                
                        } else if (item.gender == "female") {
                            genderFemaleYAxis.push(null);                                
                        }
                    }

                });          
                
                if(!(ageXAxis.length > 0)){ 
                    ageXAxis.push("25-34")
                    ageXAxis.push("35-44")
                    ageXAxis.push("45-54")
                    ageXAxis.push("55-64")
                    ageXAxis.push("65+")
                }                

                ageXAxis.forEach(function(campaignItem, i) { 
                    genderMaleFemaleXAxis[i] = new Array();
                    genderMaleFemaleXAxis[i].push('M      F')
                    genderMaleFemaleXAxis[i].push(ageXAxis[i])

                });                   


                //Create data for placement graph
                conversionArrayPAD.forEach(function(item, k) {
                    var conversionsItem = parseInt(item.conversions);
                    placementXAxis.push(item.placement);
                    placementYAxis.push(parseInt(item.conversions));
                });     
                
                //Create data for country graph
                conversionArrayCountry.forEach(function(item, k) {                        
                    countryXAxis.push(item.country);
                    if (item.conversions != '') {                            
                        countryYAxis.push(parseInt(item.conversions));                            
                    } else {
                        countryYAxis.push(null);                            
                    }
                });    
                
                //Create data for type graph
                conversionArrayType.forEach(function(item, k) {                        
                    typeXAxis.push(item.type);
                    if (item.conversions != '') {                            
                        typeYAxis.push(parseInt(item.conversions));                            
                    } else {
                        typeYAxis.push(null);                            
                    }
                });          
                
                //Create data for channel graph
                conversionArrayChannel.forEach(function(item, k) {                        
                    channelXAxis.push(item.channel);
                    if (item.conversions != '') {                            
                        channelYAxis.push(parseInt(item.conversions));                            
                    } else {
                        channelYAxis.push(null);                            
                    }
                });                     
                

            
                if (isGeneralBreakdowns) {
                    generalBreakdownsState.push({
                        id: generalBreakdowns.id, 
                        name:  generalBreakdowns.name,
                        platform: generalBreakdowns.platform,
                        status: generalBreakdowns.status,
                        currPeriodData: generalBreakdowns[period],
                        breakdowns: {
                                conversions: {YAxis: conversionsYAxis, XAxis: conversionsXAxis},
                                creatives: {YAxis: creativeYAxis, XAxis: creativeXAxis, XAxisCut: creativeXAxisCut},
                                age: {YAxis: ageYAxis, XAxis: ageXAxis},
                                gender: {maleYAxis: genderMaleYAxis, femaleYAxis: genderFemaleYAxis, XAxis: genderMaleFemaleXAxis},
                                placement: {YAxis: placementYAxis, XAxis: placementXAxis},
                                country: {YAxis: countryYAxis, XAxis: countryXAxis},
                                type: {YAxis: typeYAxis, XAxis: typeXAxis},
                                channel: {YAxis: channelYAxis, XAxis: channelXAxis},
                            }
                        }); 
                }
                else {
                    campaignsBreakdownsState.push({
                        id: element.id, 
                        name:  element.name,
                        platform: element.platform,
                        status: element.status,
                        currPeriodData: element[period],
                        breakdowns: {
                                conversions: {YAxis: conversionsYAxis, XAxis: conversionsXAxis},
                                creatives: {YAxis: creativeYAxis, XAxis: creativeXAxis, XAxisCut: creativeXAxisCut},
                                age: {YAxis: ageYAxis, XAxis: ageXAxis},
                                gender: {maleYAxis: genderMaleYAxis, femaleYAxis: genderFemaleYAxis, XAxis: genderMaleFemaleXAxis},
                                placement: {YAxis: placementYAxis, XAxis: placementXAxis},
                                country: {YAxis: countryYAxis, XAxis: countryXAxis},
                                type: {YAxis: typeYAxis, XAxis: typeXAxis},
                                channel: {YAxis: channelYAxis, XAxis: channelXAxis},
                            }
                        });
                }

            }, this); 
        }

        if (nextProps.campaignsDataAPI!=undefined) {            
            var originalCampaigns = nextProps.campaignsDataAPI.campaigns;
            var originalGeneralBreakdowns = nextProps.campaignsDataAPI.breakdowns;
            var campaignsBreakdownsState = [];
            var campaignsDataForTableState = [];
            var generalBreakdownsState = [];    
            var period = $('.btn-group > .btn.active').attr('id');
            var periodFix7Days = "last_7_days";

            //Extract data for "General Breakdowns"
            if (originalGeneralBreakdowns!=undefined) {
                var generalBreakdownsArr = [];
                var generalBreakdowns = {last_7_days: originalGeneralBreakdowns};   
                
                generalBreakdownsArr.push(generalBreakdowns);

                extractBreakdownFromArr(generalBreakdownsArr, true);

            }

            //Extract data for "Campaigns Breakdowns"
            if (this.props.campaignsBreakdownAPI!=undefined && this.props.campaignsDataAPI.breakdowns!=undefined) {                
                var campaignBreakdowns = JSON.parse(JSON.stringify(this.props.campaignsBreakdownAPI));
                            
                $.when(extractBreakdownFromArr(campaignBreakdowns, false)).then(() => {
                    new Promise(resolve => setTimeout(() => resolve( 
                        $(".table-responsive label").css("pointer-events", "auto")
                    ), 2000))
                  });                                  
                
            }

            //Extract data for campaigns table
            if (originalCampaigns != undefined) {
                originalCampaigns.forEach(function (element) {
                    campaignsDataForTableState.push({
                        id: element.id,
                        name: element.name,
                        platform: element.platform,
                        status: element.status,
                        currPeriodData: element[period],
                        breakdowns: undefined
                    });
                }, this);  
            }
               
                         
             
            //Start settings states
            this.setState({
                campaignsBreakdowns: campaignsBreakdownsState,    
                generalBreakdowns: generalBreakdownsState,                   
                campaignsDataForTable: campaignsDataForTableState,           
                total_7d_conversions: nextProps.campaignsDataAPI.total_7d_conversions,
                total_7d_average_optimization: nextProps.campaignsDataAPI.total_7d_average_optimization,
                total_7d_budget: nextProps.campaignsDataAPI.total_7d_budget,
                total_7d_saved_money: nextProps.campaignsDataAPI.total_7d_saved_money,
                total_30d_conversions: nextProps.campaignsDataAPI.total_30d_conversions,
                total_30d_average_optimization: nextProps.campaignsDataAPI.total_30d_average_optimization,
                total_30d_budget: nextProps.campaignsDataAPI.total_30d_budget,
                total_30d_saved_money: nextProps.campaignsDataAPI.total_30d_saved_money
            });                     

          }        
    }

    componentDidUpdate(){
        $('input[type=radio][name=table_radio]').click($.proxy(function () {            
            var campaignIndex = $("input:checked").val();  

            //Dashboard Breakdowns Charts
            function handleDashboardChart(breakdownsArr, elementIndex) { 
                Chart.defaults.global.defaultFontColor = 'rgba(255,255,255,0.5)';
                Chart.defaults.global.defaultFontSize = 10;
                Chart.defaults.global.defaultFontStyle = 'bold';
                                   
                
                // destroy first each charts, to avoid error Uncaught TypeError: Cannot read property 'currentStyle' of null
                if (window.barChart1!= null) {
                    window.barChart1.destroy();
                    window.barChart2.destroy();
                    window.barChart3.destroy();
                    window.barChart4.destroy();
                    window.barChart5.destroy();
                    window.barChart6.destroy();
                    window.barChart7.destroy();
                    window.barChart8.destroy();                        
                    }

                $('canvas').parent().each(function() {
                    //get child canvas id
                    var childCanvasId = $(this).find("canvas").attr('id');
                    // in same pages we could have <canvas> elements without id, therefore childCanvasId is undefined
                    if (childCanvasId !== undefined) {
                      //remove canvas
                      $('#' + childCanvasId).remove();
                      // append new canvas to the parent again
                      $(this).append('<canvas id="' + childCanvasId + '"></canvas>');                      
                    }
                  });


                 //Conversions Breakdown 
                var ctx = document.getElementById('barChartConversions');
                window.barChart1 = new Chart(ctx, { 
                    type: 'line',
                    data: {
                        labels: breakdownsArr[elementIndex].breakdowns.conversions.XAxis,
                        datasets: [{
                            label: 'Conversions',
                            data: breakdownsArr[elementIndex].breakdowns.conversions.YAxis,
                            backgroundColor: 'transparent', 
                            borderColor: WARNING_COLOR
                        }]
                    },
                    options: {                        
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItems, data) { 
                                    var tooltipTitle = '';
                                    switch (tooltipItems[0].index) {

                                    }
                                    return tooltipTitle;
                                },
                                labelColor: function(tooltipItem, chart) {
                                    return {
                                        borderColor: 'transparent',
                                        backgroundColor: WHITE_TRANSPARENT_5_COLOR
                                    };
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    borderDashOffset: 8,
                                    drawTicks: false,
                                    drawBorder: false,
                                    color: 'rgba(255,255,255,0.3)',
                                    borderDash: [4],
                                },
                                ticks: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                gridLines : {
                                    display : false
                                }
                            }]
                        }
                    }
                });
                

                //Creatives Breakdown
                var ctx = document.getElementById('barChartCreatives');                
                var valuesArrCreative = breakdownsArr[elementIndex].breakdowns.creatives.XAxis;
                window.barChart2 = new Chart(ctx, {                    
                    type: 'bar',
                    data: {
                        labels: breakdownsArr[elementIndex].breakdowns.creatives.XAxisCut,
                        datasets: [{
                            label: 'Conversions',
                            data: breakdownsArr[elementIndex].breakdowns.creatives.YAxis,
                            backgroundColor: WARNING_COLOR,
                            borderColor: 'transparent'
                        }]
                    },
                    options: {                        
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItems, data) { 
                                    var tooltipTitle = '';
                                    switch (tooltipItems[0].index) {
                                        case 0: tooltipTitle = valuesArrCreative[0]; break;
                                        case 1: tooltipTitle = valuesArrCreative[1]; break;
                                        case 2: tooltipTitle = valuesArrCreative[2]; break;
                                        case 3: tooltipTitle = valuesArrCreative[3]; break;
                                        case 4: tooltipTitle = valuesArrCreative[4]; break;
                                        case 5: tooltipTitle = valuesArrCreative[5]; break;
                                        case 6: tooltipTitle = valuesArrCreative[6]; break;
                                    }
                                    return tooltipTitle;
                                },
                                labelColor: function(tooltipItem, chart) {
                                    return {
                                        borderColor: 'transparent',
                                        backgroundColor: WHITE_TRANSPARENT_5_COLOR
                                    };
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    borderDashOffset: 8,
                                    drawTicks: false,
                                    drawBorder: false,
                                    color: 'rgba(255,255,255,0.3)',
                                    borderDash: [4],
                                },
                                ticks: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                gridLines : {
                                    display : false
                                }
                            }]
                        }
                    }
                });   

                
                
                //Age Breakdown
                var ctx = document.getElementById('barChartAge');
                var valuesArrAge = breakdownsArr[elementIndex].breakdowns.age.XAxis;
                window.barChart3 = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: breakdownsArr[elementIndex].breakdowns.age.XAxis,
                        datasets: [{
                            label: 'Conversions',
                            data: breakdownsArr[elementIndex].breakdowns.age.YAxis,
                            backgroundColor: WARNING_COLOR,
                            borderColor: 'transparent'
                        }]
                    },
                    options: {                        
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItems, data) { 
                                    var tooltipTitle = '';
                                    switch (tooltipItems[0].index) {
                                        case 0: tooltipTitle = valuesArrAge[0]; break;
                                        case 1: tooltipTitle = valuesArrAge[1]; break;
                                        case 2: tooltipTitle = valuesArrAge[2]; break;
                                        case 3: tooltipTitle = valuesArrAge[3]; break;
                                        case 4: tooltipTitle = valuesArrAge[4]; break;
                                        case 5: tooltipTitle = valuesArrAge[5]; break;
                                        case 6: tooltipTitle = valuesArrAge[6]; break;
                                    }
                                    return tooltipTitle;
                                },
                                labelColor: function(tooltipItem, chart) {
                                    return {
                                        borderColor: 'transparent',
                                        backgroundColor: WHITE_TRANSPARENT_5_COLOR
                                    };
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    borderDashOffset: 8,
                                    drawTicks: false,
                                    drawBorder: false,
                                    color: 'rgba(255,255,255,0.3)',
                                    borderDash: [4],
                                },
                                ticks: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                gridLines : {
                                    display : false
                                }
                            }]
                        }
                    }
                });   
                
                //Gender Breakdown
                var ctx = document.getElementById('barChartGender');
                window.barChart4 = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: breakdownsArr[elementIndex].breakdowns.gender.XAxis,
                        datasets: [
                          {
                            label: "Conversions",
                            backgroundColor: WARNING_COLOR,
                            data: breakdownsArr[elementIndex].breakdowns.gender.maleYAxis,
                            borderColor: 'transparent'
                          }, {
                            label: "Conversions",
                            backgroundColor: WARNING_COLOR,
                            data: breakdownsArr[elementIndex].breakdowns.gender.femaleYAxis,
                            borderColor: 'transparent'
                          }
                        ]
                      },
                    options: {                        
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItems, data) { 
                                    var tooltipTitle = '';
                                    switch (tooltipItems[0].index) {

                                    }
                                    return tooltipTitle;
                                },
                                labelColor: function(tooltipItem, chart) {
                                    return {
                                        borderColor: 'transparent',
                                        backgroundColor: WHITE_TRANSPARENT_5_COLOR
                                    };
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    borderDashOffset: 8,
                                    drawTicks: false,
                                    drawBorder: false,
                                    color: 'rgba(255,255,255,0.3)',
                                    borderDash: [4],
                                },
                                ticks: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                gridLines : {
                                    display : false
                                }
                            }]
                        }
                    }
                }); 
                
                //Placement Breakdown
                var ctx = document.getElementById('barChartPlacement');
                window.barChart5 = new Chart(ctx, {
                    type: 'bar',
                    data: { 
                        labels: breakdownsArr[elementIndex].breakdowns.placement.XAxis,
                        datasets: [{
                            label: 'Conversions',
                            data: breakdownsArr[elementIndex].breakdowns.placement.YAxis,
                            backgroundColor: WARNING_COLOR,
                            borderColor: 'transparent'
                        }]
                    },
                    options: {                        
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItems, data) { 
                                    var tooltipTitle = '';
                                    switch (tooltipItems[0].index) {

                                    }
                                    return tooltipTitle;
                                },
                                labelColor: function(tooltipItem, chart) {
                                    return {
                                        borderColor: 'transparent',
                                        backgroundColor: WHITE_TRANSPARENT_5_COLOR
                                    };
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    borderDashOffset: 8,
                                    drawTicks: false,
                                    drawBorder: false,
                                    color: 'rgba(255,255,255,0.3)',
                                    borderDash: [4],
                                },
                                ticks: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                gridLines : {
                                    display : false
                                }
                            }]
                        }
                    }
                });   
                
                //Country Breakdown
                var ctx = document.getElementById('barChartCountry');
                window.barChart6 = new Chart(ctx, {
                    type: 'bar',
                    data: {  
                        labels: breakdownsArr[elementIndex].breakdowns.country.XAxis,
                        datasets: [{
                            label: 'Conversions',
                            data: breakdownsArr[elementIndex].breakdowns.country.YAxis,
                            backgroundColor: WARNING_COLOR,
                            borderColor: 'transparent'
                        }]
                    },
                    options: {                        
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItems, data) { 
                                    var tooltipTitle = '';
                                    switch (tooltipItems[0].index) {

                                    }
                                    return tooltipTitle;
                                },
                                labelColor: function(tooltipItem, chart) {
                                    return {
                                        borderColor: 'transparent',
                                        backgroundColor: WHITE_TRANSPARENT_5_COLOR
                                    };
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    borderDashOffset: 8,
                                    drawTicks: false,
                                    drawBorder: false,
                                    color: 'rgba(255,255,255,0.3)',
                                    borderDash: [4],
                                },
                                ticks: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                gridLines : {
                                    display : false
                                }
                            }]
                        }
                    }
                });       
                
                //Type Breakdown
                var ctx = document.getElementById('barChartType');
                window.barChart7 = new Chart(ctx, {
                    type: 'bar',   
                    data: {
                        labels: breakdownsArr[elementIndex].breakdowns.type.XAxis,
                        datasets: [{
                            label: 'Conversions',
                            data: breakdownsArr[elementIndex].breakdowns.type.YAxis,
                            backgroundColor: WARNING_COLOR,
                            borderColor: 'transparent'
                        }]
                    },
                    options: {                        
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItems, data) { 
                                    var tooltipTitle = '';
                                    switch (tooltipItems[0].index) {

                                    }
                                    return tooltipTitle;
                                },
                                labelColor: function(tooltipItem, chart) {
                                    return {
                                        borderColor: 'transparent',
                                        backgroundColor: WHITE_TRANSPARENT_5_COLOR
                                    };
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    borderDashOffset: 8,
                                    drawTicks: false,
                                    drawBorder: false,
                                    color: 'rgba(255,255,255,0.3)',
                                    borderDash: [4],
                                },
                                ticks: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                gridLines : {
                                    display : false
                                }
                            }]
                        }
                    }
                });     
                
                //Channel Breakdown
                var ctx = document.getElementById('barChartChannel');
                window.barChart8 = new Chart(ctx, {
                    type: 'bar',    
                    data: {
                        labels: breakdownsArr[elementIndex].breakdowns.channel.XAxis,
                        datasets: [{
                            label: 'Conversions',
                            data: breakdownsArr[elementIndex].breakdowns.channel.YAxis,
                            backgroundColor: WARNING_COLOR,
                            borderColor: 'transparent'
                        }]
                    },
                    options: {                        
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItems, data) { 
                                    var tooltipTitle = '';
                                    switch (tooltipItems[0].index) {
  
                                    }
                                    return tooltipTitle;
                                },
                                labelColor: function(tooltipItem, chart) {
                                    return {
                                        borderColor: 'transparent',
                                        backgroundColor: WHITE_TRANSPARENT_5_COLOR
                                    };
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    borderDashOffset: 8,
                                    drawTicks: false,
                                    drawBorder: false,
                                    color: 'rgba(255,255,255,0.3)',
                                    borderDash: [4],
                                },
                                ticks: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                gridLines : {
                                    display : false
                                }
                            }]
                        }
                    }
                });                
            };
            
            var handleDashboardChartThis = handleDashboardChart.bind(this);
            
            //Generate charts for "General Breakdowns"
            if (campaignIndex==0 && this.state.generalBreakdowns[campaignIndex]!=undefined) {
                if (this.state.generalBreakdowns[campaignIndex].breakdowns!=undefined) { 
                    handleDashboardChartThis(this.state.generalBreakdowns, campaignIndex);  
                }
            }

            //Generate charts for "Campaigns Breakdowns"
            else {
                if ((campaignIndex-1)>=0 && this.state.campaignsBreakdowns[campaignIndex-1]!=undefined) {
                    if (this.state.campaignsBreakdowns[campaignIndex-1].breakdowns!=undefined) {                
                        handleDashboardChartThis(this.state.campaignsBreakdowns, (campaignIndex-1));                                                 
                    }
                }                
            }

        },this));                        
    }
    
    render() {
      return (
        <div id="content" styleName="content user-container-content user-container-content-dashboard">
            <div className="row m-b-20">
                <div className="col-md-4">
                    <div className="panel panel-default" styleName="panel panel-default">
                        <div className="panel-heading" styleName="panel-heading">
                            <div className="panel-heading-btn" styleName="panel-heading-btn"> 
                                <a href="javascript:;" className="btn" data-toggle="panel-collapse"><i className="glyphicon glyphicon-chevron-up"></i></a>
                                <a href="javascript:;" className="btn" data-toggle="panel-remove"><i className="glyphicon glyphicon-remove"></i></a>                        
                            </div>
                            <h4 className="panel-title" styleName="panel-title">Next Steps</h4>
                        </div>
                        <div className="panel-body" styleName="panel-body">
                            <h3><span styleName="text-purple">Activate Trapica </span></h3>
                            <p className="panel-body-text" styleName="panel-body-text">In order to activate Trapica on new campaigns please add “Trapica” to the name of the campaigns you would like our AI to manage and it will start optimizing the campaigns</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="page-header" styleName="page-header">Dashboard <small>overview, analytics &amp; report</small></h1>
            <div className="row" styleName="row-dashboard"> 
            <div className="col-md-6 col-sm-12">
                <div className="widget widget-card widget-card-rowspan2 dynamic-xs inverse-mode" styleName="widget widget-card widget-card-rowspan2 dynamic-xs inverse-mode">
                    <div className="widget-card-cover" styleName="widget-card-cover">
                        <div className="cover-bg" styleName="cover-bg"> </div>
                        <img src="/assets/images/landing-cover.jpg" alt="" />
                    </div>
                    <div className="widget-card-content" styleName="widget-card-content">
                        <h4 className="widget-title" styleName="widget-title"><strong>Do Marketing with AI</strong></h4>
                    </div>
                    <div className="widget-card-content bottom p-b-5" styleName="widget-card-content bottom p-b-5">
                        <div className="text-center">
                        <h3 styleName="m-b-0">Welcome back!</h3>
                        <p styleName="opacity-7"> </p>
                        </div>
                        <div className="row" styleName="row-dashboard">
                        <div className="col-xs-6">
                            <ul className="widget widget-list m-b-0 no-bg inverse-mode" styleName="widget widget-list m-b-0 no-bg inverse-mode">
                                <li>
                                    <a href="#" className="widget-list-container" styleName="widget-list-container">
                                        <div className="widget-list-media icon p-l-0" styleName="widget-list-media icon p-l-0"> 
                                            <i className="ti-bar-chart bg-gradient-blue" styleName="ti-bar-chart bg-gradient-blue"></i>
                                        </div>
                                        <div className="widget-list-content" styleName="widget-list-content">
                                            <h4 className="widget-title" styleName="widget-title">Total number of conversions<br /> (Last 7 days)</h4>
                                            <div className="widget-desc" styleName="widget-desc">
                                                <h2>{parseInt(this.state.total_7d_conversions).toLocaleString()}</h2> 
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="widget-list-container" styleName="widget-list-container">
                                        <div className="widget-list-media icon p-l-0" styleName="widget-list-media icon p-l-0"> 
                                            <i className="ti-stats-up bg-gradient-green" styleName="ti-stats-up bg-gradient-green"></i>
                                        </div>
                                        <div className="widget-list-content" styleName="widget-list-content">
                                        <h4 className="widget-title" styleName="widget-title">Average % of optimization (Last 7 days)</h4>
                                        <div className="widget-desc" styleName="widget-desc">
                                            <h2>{parseFloat(this.state.total_7d_average_optimization)}%</h2>
                                        </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6">
                            <ul className="widget widget-list m-b-0 no-bg inverse-mode" styleName="widget widget-list m-b-0 no-bg inverse-mode">
                                <li>
                                    <a href="#" className="widget-list-container" styleName="widget-list-container">
                                        <div className="widget-list-media icon p-l-0" styleName="widget-list-media icon p-l-0"> 
                                            <i className="ti-briefcase bg-gradient-orange" styleName="ti-briefcase bg-gradient-orange"></i>
                                        </div>
                                        <div className="widget-list-content" styleName="widget-list-content">
                                        <h4 className="widget-title" styleName="widget-title">Total Budget Spend <br /> (Last 7 days)</h4>
                                        <div className="widget-desc" styleName="widget-desc">
                                            <h2>${parseFloat(this.state.total_7d_budget).toLocaleString()}</h2>
                                        </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="widget-list-container" styleName="widget-list-container">
                                        <div className="widget-list-media icon p-l-0" styleName="widget-list-media icon p-l-0"> 
                                            <i className="ti-filter bg-gradient-red" styleName="ti-filter bg-gradient-red"></i>
                                        </div>
                                        <div className="widget-list-content" styleName="widget-list-content">
                                        <h4 className="widget-title" styleName="widget-title">Money saved (Last 7 days)</h4>
                                        <div className="widget-desc" styleName="widget-desc">
                                            <h2>${parseFloat(this.state.total_7d_saved_money).toLocaleString()}</h2>
                                        </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="widget widget-card inverse-mode" styleName="widget widget-card inverse-mode">
                    <div className="widget-card-cover" styleName="widget-card-cover">
                        <div className="cover-bg" styleName="cover-bg"> </div>
                        <img src="/assets/images/dashboard-cover-3.jpg" alt="" />
                    </div>
                    <div className="widget-card-content" styleName="widget-card-content">
                        <div className="dropdown dropdown-icon pull-right" styleName="dropdown dropdown-icon pull-right">
                        <ul className="dropdown-menu dropdown-menu-right" styleName="dropdown-menu dropdown-menu-right">
                            <li><a href="#">View</a></li>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Report</a></li>
                        </ul>
                        </div>
                        <h4 className="widget-title" styleName="widget-title">Total number of conversions (last 30 days)</h4>
                        <div className="widget-desc" styleName="widget-desc">
                        <h1>{parseInt(this.state.total_30d_conversions).toLocaleString()}</h1> 
                        </div>
                    </div>
                    <div className="widget-card-content bottom" styleName="widget-card-content bottom"> 
                        <div className="widget-card-icon bg-gradient-blue" styleName="widget-card-icon bg-gradient-blue"><i className="ti-stats-up"></i></div>
                    </div>
                </div>
                <div className="widget widget-card inverse-mode" styleName="widget widget-card inverse-mode">
                    <div className="widget-card-cover" styleName="widget-card-cover">
                        <div className="cover-bg" styleName="cover-bg"> </div>
                        <img src="/assets/images/dashboard-cover-4.jpg" alt="" />
                    </div>
                    <div className="widget-card-content" styleName="widget-card-content">
                        <div className="dropdown dropdown-icon pull-right" styleName="dropdown dropdown-icon pull-right">
                        <ul className="dropdown-menu dropdown-menu-right" styleName="dropdown-menu dropdown-menu-right">
                            <li><a href="#">View</a></li>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Report</a></li>
                        </ul>
                        </div>
                        <h4 className="widget-title" styleName="widget-title"><strong>Average % of optimization (last 30 days)</strong></h4>
                        <div className="widget-desc" styleName="widget-desc">
                        <h1>{parseFloat(this.state.total_30d_average_optimization)}%</h1>
                        </div>
                    </div>
                    <div className="widget-card-content bottom" styleName="widget-card-content bottom"> 
                        <div className="widget-card-icon bg-gradient-green" styleName="widget-card-icon bg-gradient-green"><i className="ti-briefcase"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="widget widget-card inverse-mode" styleName="widget widget-card inverse-mode">
                    <div className="widget-card-cover" styleName="widget-card-cover">
                        <div className="cover-bg" styleName="cover-bg"> </div>
                        <img src="/assets/images/dashboard-cover-1.jpg" alt="" />
                    </div>
                    <div className="widget-card-content" styleName="widget-card-content">
                        <div className="dropdown dropdown-icon pull-right" styleName="dropdown dropdown-icon pull-right">
                        <ul className="dropdown-menu dropdown-menu-right" styleName="dropdown-menu dropdown-menu-right">
                            <li><a href="#">View</a></li>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Report</a></li>
                        </ul>
                        </div>
                        <h4 className="widget-title" styleName="widget-title"><strong>Your ads budget (last 30 days)</strong></h4>
                        <div className="widget-desc" styleName="widget-desc">
                        <h1>${parseFloat(this.state.total_30d_budget).toLocaleString()}</h1>
                        </div>
                    </div>
                    <div className="widget-card-content bottom" styleName="widget-card-content bottom"> 
                        <div className="widget-card-icon bg-gradient-orange" styleName="widget-card-icon bg-gradient-orange "><i className="ti-filter"></i></div>
                    </div>
                </div>
                <div className="widget widget-card inverse-mode" styleName="widget widget-card inverse-mode">
                    <div className="widget-card-cover" styleName="widget-card-cover">
                        <div className="cover-bg" styleName="cover-bg"> </div>
                        <img src="/assets/images/dashboard-cover-2.jpg" alt="" />
                    </div>
                    <div className="widget-card-content" styleName="widget-card-content">
                        <div className="dropdown dropdown-icon pull-right" styleName="dropdown dropdown-icon pull-right">
                        <ul className="dropdown-menu dropdown-menu-right" styleName="dropdown-menu dropdown-menu-right">
                            <li><a href="#">View</a></li>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Report</a></li>
                        </ul>
                        </div>
                        <h4 className="widget-title" styleName="widget-title">Your saved money (last 30 days)</h4>
                        <div className="widget-desc" styleName="widget-desc">
                        <h1>${parseFloat(this.state.total_30d_saved_money).toLocaleString()}</h1>
                        </div>
                    </div>
                    <div className="widget-card-content bottom" styleName="widget-card-content bottom"> 
                        <div className="widget-card-icon bg-gradient-pink" styleName="widget-card-icon bg-gradient-pink"><i className="ti-bar-chart"></i></div>
                    </div>
                </div>
            </div>
            </div>
            <br /> <br /> <br />
            <div className="col-md-3 col-sm-6">
            <div styleName="section-title m-t-10">Conversions</div>
            <div styleName="widget inverse-mode m-b-0">
                <div styleName="widget-header">
                    <h4 styleName="widget-title">Weekly Usage <small>Last 7 Days</small></h4>
                </div>
                <div styleName="widget-body barChartConversions bg-white-transparent-2 p-t-20 p-b-10"> 
                    <canvas id="barChartConversions" height="123"></canvas>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div styleName="section-title m-t-10">Creatives</div>
            <div styleName="widget inverse-mode m-b-0">
                <div styleName="widget-header">
                    <h4 styleName="widget-title">Weekly Usage <small>Last 7 Days</small></h4>
                </div>
                <div styleName="widget-body barChartCreatives bg-white-transparent-2 p-t-20 p-b-10"> 
                    <canvas id="barChartCreatives" height="123"></canvas>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div styleName="section-title m-t-10">Age</div>
            <div styleName="widget inverse-mode m-b-0">
                <div styleName="widget-header">
                    <h4 styleName="widget-title">Weekly Usage <small>Last 7 Days</small></h4>
                </div>
                <div styleName="widget-body barChartAge bg-white-transparent-2 p-t-20 p-b-10"> 
                    <canvas id="barChartAge" height="123"></canvas>                
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div styleName="section-title m-t-10">Gender</div>
            <div styleName="widget inverse-mode m-b-0">
                <div styleName="widget-header">
                    <h4 styleName="widget-title">Weekly Usage <small>Last 7 Days</small></h4>
                </div>
                <div styleName="widget-body barChartGender bg-white-transparent-2 p-t-20 p-b-10"> 
                    <canvas id="barChartGender" height="123"></canvas>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div styleName="section-title m-t-10">Placement</div>
            <div styleName="widget inverse-mode m-b-0">
                <div styleName="widget-header">
                    <h4 styleName="widget-title">Weekly Usage <small>Last 7 Days</small></h4>
                </div>
                <div styleName="widget-body barChartPlacement bg-white-transparent-2 p-t-20 p-b-10"> 
                    <canvas id="barChartPlacement" height="123"></canvas>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div styleName="section-title m-t-10">Country</div>
            <div styleName="widget inverse-mode m-b-0">
                <div styleName="widget-header">
                    <h4 styleName="widget-title">Weekly Usage <small>Last 7 Days</small></h4>
                </div>
                <div styleName="widget-body barChartCountry bg-white-transparent-2 p-t-20 p-b-10"> 
                    <canvas id="barChartCountry" height="123"></canvas>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div styleName="section-title m-t-10">Type</div>
            <div styleName="widget inverse-mode m-b-0">
                <div styleName="widget-header">
                    <h4 styleName="widget-title">Weekly Usage <small>Last 7 Days</small></h4>
                </div>
                <div styleName="widget-body barChartType bg-white-transparent-2 p-t-20 p-b-10"> 
                    <canvas id="barChartType" height="123"></canvas>                
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div styleName="section-title m-t-10">Channel</div>
            <div styleName="widget inverse-mode m-b-0">
                <div styleName="widget-header">
                    <h4 styleName="widget-title">Weekly Usage <small>Last 7 Days</small></h4>
                </div>
                <div styleName="widget-body barChartChannel bg-white-transparent-2 p-t-20 p-b-10"> 
                    <canvas id="barChartChannel" height="123"></canvas>
                </div>
            </div>
            </div>
            <div className="row"> </div>
            <br /> <br /> <br />
            <div className="btn-group m-b-10" styleName="btn-group m-b-10"><button id="today" className="btn btn-default" styleName="btn btn-default" type="button">Today</button> <button id="last_7_days" className="btn btn-default dashboard-default-button" styleName="btn btn-default dashboard-default-button" type="button">Last 7 days</button> <button id="last_30_days" className="btn btn-default" styleName="btn btn-default" type="button">Last 30 days</button></div>
            <div className="row">
            <div className="panel panel-inverse" styleName="panel panel-inverse">
                <div className="panel-heading" styleName="panel-heading">
                    <h4 className="panel-title" styleName="panel-title">List of Campaigns</h4>
                </div>
                <div className="panel-body" styleName="panel-body">
                    <div className="table-responsive" styleName="table-responsive">
                        <table className="table table-inverse m-b-0" styleName="table table-inverse m-b-0">
                        <thead>
                            <tr>
                                <td className="radio-col" styleName="radio-col">
                                    <div className="radio" styleName="radio"><input id="table_radio_0" name="table_radio" type="radio" value="0" /> <label for="table_radio_0"></label></div>
                                </td>
                                <th>Campaign Name</th>
                                <th>Platform</th>
                                <th>Conversions</th>
                                <th>Cost Per Conversion</th>
                                <th>Reach</th>
                                <th>CPC</th>
                                <th>CPM</th>
                                <th>% optimization</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.campaignsDataForTable.map((item, key) => {
                                    return (
                                    <tr key={Math.random()}>
                                        <td className="radio-col" styleName="radio-col">   
                                            <div className="radio" styleName="radio"><input id={"table_radio_" + (key+1)} name="table_radio" type="radio" value={key+1} /> <label for={"table_radio_" + (key+1)}></label></div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.platform}</td>
                                        {item.currPeriodData==undefined ? (
                                            <td>N/A</td>
                                        ) : item.currPeriodData.conversions==null || item.currPeriodData.conversions=="" || item.currPeriodData.conversions=="N/A" ? (
                                            <td>N/A</td>
                                        ): (
                                            <td>{parseInt(item.currPeriodData.conversions).toLocaleString()}</td> 
                                        )}
                                        {item.currPeriodData==undefined ? (
                                            <td>N/A</td>
                                        ) : item.currPeriodData.cost_per_conversion==null || item.currPeriodData.cost_per_conversion=="N/A" || item.currPeriodData.cost_per_conversion=="" ? (
                                            <td>N/A</td>
                                        ) : (
                                            <td>{parseFloat(item.currPeriodData.cost_per_conversion)}</td>
                                        )}            
                                        {item.currPeriodData==undefined ? (
                                            <td>N/A</td>
                                        ) : item.currPeriodData.reach==null || item.currPeriodData.reach=="" || item.currPeriodData.reach=="N/A" ? (
                                            <td>N/A</td>
                                        ): (
                                            <td>{parseInt(item.currPeriodData.reach).toLocaleString()}</td> 
                                        )}     
                                        {item.currPeriodData==undefined ? (
                                            <td>N/A</td>
                                        ) : item.currPeriodData.cpc==null || item.currPeriodData.cpc=="N/A" || item.currPeriodData.cpc=="" ? (
                                            <td>N/A</td>
                                        ): (
                                            <td>{parseFloat(item.currPeriodData.cpc)}</td>
                                        )}   
                                        {item.currPeriodData==undefined ? (
                                            <td>N/A</td>
                                        ) : item.currPeriodData.cpm==null || item.currPeriodData.cpm=="N/A" || item.currPeriodData.cpm=="" ? (
                                            <td>N/A</td>
                                        ): (
                                            <td>{parseFloat(item.currPeriodData.cpm)}</td>
                                        )}   
                                        {item.currPeriodData==undefined ? (
                                            <td>N/A</td>
                                        ) : item.currPeriodData.optimization==null || item.currPeriodData.optimization=="N/A" || item.currPeriodData.optimization=="" ? (
                                            <td>N/A</td>
                                        ): (
                                            <td>{parseFloat(item.currPeriodData.optimization)}%</td>
                                        )}                                                                                                                                                                                                                                                                           
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </div>
      );
      }
    }