import React from "react";
import { connect } from "react-redux";
import "./Guest.css";
import { setTitle, changeVisitorStatus, showNavigationBar } from "../../actions/action";

@connect((store) => {
    return {


    }
})

export default class Products extends React.Component {

    componentWillMount() {

        this.props.dispatch(setTitle("Products"))
        this.props.dispatch(changeVisitorStatus(false))
        this.props.dispatch(showNavigationBar(false))

    }

    componentDidMount() {
        $(".show-register").click(function () {
            $('#signup').modal('show');
        });

    }

    render() {
        return (
            <div styleName="tr-homepage homepage-2">
                <div id="tr-home" styleName="tr-home-slider">
                    <div styleName="item item-grid-2">
                        <div styleName="slide-content">
                            <div styleName="tr-middle">
                                <div styleName="tr-feed">
                                    <ul className="pull-right list-inline">
                                        <li>Find Us</li>
                                        <li><a href="https://www.facebook.com/Trapica.labs"><i className="fa fa-facebook" styleName="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/trapica_labs"><i className="fa fa-twitter" styleName="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div styleName="home-content">
                                                <h1 data-animation="animated fadeInDown">Target without technology is <span className="color"> like driving without Wheels </span></h1>
                                                <h2 data-animation="animated fadeInUp">Increase ROI using HDT</h2>
                                                <a className="btn btn-primary show-demo" styleName="btn btn-primary" data-animation="animated fadeInUp">Request a Demo </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="slider-image"><img className="img-responsive" src="/assets/images/slider7.jpg" alt="Service Image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tr-service" styleName="tr-service image-bg section-padding">
                    <div className="container">
                        <div styleName="section-info">
                            <h2>target with <span> autonomous AI</span></h2>
                        </div>
                        <div styleName="service-content">
                            <div className="row mb40">
                                <div className="col-sm-3">
                                    <div styleName="service icon-1">
                                        <img className="img-responsive" src="/assets/images/service/1.png" alt="Service Image" />
                                        <h3>Hyper DYNAMIC Targeting</h3>
                                        <p>Trapica learns from real time conversions and autonomously target only the right audiences.</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div styleName="service icon-2">
                                        <img className="img-responsive" src="/assets/images/service/2.png" alt="Service Image" />
                                        <h3>Autonomous Marketing Optimization</h3>
                                        <p>Fully autonomous AI for all your marketing needs on social networks.</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div styleName="service icon-3">
                                        <img className="img-responsive" src="/assets/images/service/3.png" alt="Service Image" />
                                        <h3>Social Campaigns Measurement</h3>
                                        <p>Measure all your marketing campaigns from every social network in one place.</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div styleName="service icon-4">
                                        <img className="img-responsive" src="/assets/images/service/4.png" alt="Service Image" />
                                        <h3>Dynamic AI prediction</h3>
                                        <p>Get to audience you never dream of using advanced AI powered prediction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div styleName="service icon-4">
                                    <img className="img-responsive" src="/assets/images/service/8.png" alt="Service Image" />
                                    <h3>Cross Social optimization</h3>
                                    <p>Run campaigns autonomous between different social network to get optimal performance.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div styleName="service icon-4">
                                    <img className="img-responsive" src="/assets/images/service/5.png" alt="Service Image" />
                                    <h3>Autonomous creatives A/B</h3>
                                    <p>AI that automatically decide which creative is suited to which audience.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div styleName="service icon-4">
                                    <img className="img-responsive" src="/assets/images/service/6.png" alt="Service Image" />
                                    <h3>Dynamic Bidding automation</h3>
                                    <p>Autonomous real time bidding decisions that taking under consideration Trageting.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div styleName="service icon-4">
                                    <img className="img-responsive" src="/assets/images/service/7.png" alt="Service Image" />
                                    <h3>Cross social networks attribution</h3>
                                    <p>Measure campaigns attribution across different social networks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tr-service" styleName="tr-service image-bg section-padding">
                    <div className="container">
                        <div styleName="section-info">
                            <h2>Gain full visuality into your new <span>Targeting AI power</span></h2>
                        </div>
                        <div styleName="service-content">
                            <div className="row"> </div>
                            <div className="col-sm-3">
                                <div styleName="service icon-4">
                                    <img className="img-responsive" src="/assets/images/service/9.png" alt="Service Image" />
                                    <h3>The Trapica Dashboard</h3>
                                    <p>Collect data from across your social network, enabling drill down deep into your campaign performance.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div styleName="service icon-4">
                                    <img className="img-responsive" src="/assets/images/service/10.png" alt="Service Image" />
                                    <h3>Advanced Reports</h3>
                                    <p>The dashboard reporting allow you to get advanced reports on your marketing campaigns anytime from everywhere.</p>
                                    <a className="btn btn-primary show-register" styleName="btn btn-primary"  data-animation="animated fadeInUp">Start a Free Trial</a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div styleName="service icon-4">
                                    <img className="img-responsive" src="/assets/images/service/11.png" alt="Service Image" />
                                    <h3>Discover your targeted users behavior</h3>
                                    <p>Track converted audience behavior and get valuable drilled down insight.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tr-service" styleName="tr-service image-bg section-padding">
                    <div className="container">
                        <div styleName="title">
                            <h1>Marketing Partners</h1>
                        </div>
                        <div styleName="service-content">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div styleName="service icon-1"><img className="img-responsive" src="/assets/images/service/facebook-1.png" alt="Service Image" /></div>
                                </div>
                                <div className="col-sm-3">
                                    <div styleName="service icon-2"><img className="img-responsive" src="/assets/images/service/instagram.png" alt="Service Image" /></div>
                                </div>
                                <div className="col-sm-3">
                                    <div styleName="service icon-2"><img className="img-responsive" src="/assets/images/service/Google_2015_logo1.png" alt="Service Image" /></div>
                                </div>
                                <div className="col-sm-3">
                                    <div styleName="service icon-3"><img className="img-responsive" src="/assets/images/service/linkedin.png" alt="Service Image" /></div>
                                </div>
                                <div styleName="service-content">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div styleName="service icon-1"><img className="img-responsive" src="/assets/images/service/pinterest%20(1).png" alt="Service Image" /></div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div styleName="service icon-2"><img className="img-responsive" src="/assets/images/service/branding-logos.png" alt="Service Image" /></div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div styleName="service icon-2"><img className="img-responsive" src="/assets/images/service/tweeter.png" alt="Service Image" /></div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div styleName="service icon-3"><img className="img-responsive" src="/assets/images/service/640px-Solid_color_You_Tube_logo.png" alt="Service Image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}