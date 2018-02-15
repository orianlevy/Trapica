import React from "react";
import { connect } from "react-redux";
import "../Guest/Guest.css";
import { setTitle, changeVisitorStatus, showNavigationBar } from "../../actions/action";

@connect((store) => {
    return {


    }
})

export default class Business extends React.Component {

    componentWillMount() {

        this.props.dispatch(setTitle("Business"))
        this.props.dispatch(changeVisitorStatus(false))
        this.props.dispatch(showNavigationBar(true))

    }

    componentDidMount() {
        //Google Pixel
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-72964865-1', 'auto');
        ga('send', 'pageview');


        //Facebook Pixel
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            }; if (!f._fbq) f._fbq = n;
            n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
        }(window,
            document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '845223705600730');
        fbq('track', "AddPaymentInfo");

        <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=396101353899091&ev=PageView&noscript=1" />

        $('#paypalForm').hide()

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

        window.history.pushState("", "", '/business');

        var url = "http://www.trapica.com/method/payment/approve/" + access_token;
        var input = $("<input>")
            .attr("type", "hidden")
            .attr("name", "return")
            .val(url);
        $('#paypalForm').append($(input));

        $(".paypal-submit").click(function (e) {
            var dataPlansField = $('select[title="Plan Selection"]');
            var planValue = $(this).data("value");
            var value = 0;

            if (planValue == null) {
                return false;
            } else if (planValue == "Premium") {
                value = 649;
                var planOption = "Power";
            } else if (planValue == "Business") {
                value = 1649;
                var planOption = "Professional";
            }

            dataPlansField.find('option[value="' + planOption + '"]').prop('selected', 'selected');
            dataPlansField.val(planOption);

            fbq('init', '845223705600730');
            fbq('track', 'Purchase', { value: value, currency: 'USD' });

            $("#paypalForm").submit()
        });



        $(document).ready(function () {
            $("#user-header").remove();
        })
    }

    render() {
        return (
            <div id="tr-pricing" styleName="tr-pricing image-bg section-padding">
                <div styleName="overlay"></div>
                <div className="container text-center">
                    <div styleName="section-title">
                        <h1>One more step to go </h1>
                    </div>
                    <div styleName="section-info">
                        <p>Target without technology is like driving without a wheel
                        <br />Start now with 14 days of free trial </p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div styleName="price">
                                <h2></h2>
                                <h3></h3>
                                <ul styleName="tr-list">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div styleName="price active">
                                <h2>Business</h2>
                                <h3>$1649/mo</h3>
                                <ul styleName="tr-list">
                                    <li>Up to $30K Ads Spending per month</li>
                                    <li>Unlimited number of ads</li>
                                    <li>Unlimited ads accounts </li>
                                    <li>
                                        Insights analytics   </li>
                                    <li>30 days money back guarantee</li>
                                </ul>
                                <a data-value="Business" className="paypal-submit btn btn-primary" styleName="btn btn-primary"> Subscribe and start trial <i className="fa fa-chevron-right" aria-hidden="true"></i></a><br />
                                <br /> <li>Please subscribe with PayPal to begin your 14 days free trial </li>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div styleName="price">
                                <h2></h2>
                                <h3></h3>
                                <ul styleName="tr-list">
                                    <li> </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <form id="paypalForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" defaultValue="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" defaultValue="675J7359B5RUA" />
                    <table>
                        <tbody><tr>
                            <td><input type="hidden" name="on0" defaultValue="Payment plans" />Payment plans</td>
                        </tr>
                            <tr>
                                <td><select name="os0" title="Plan Selection">
                                    <option value="Power">Power : $649.00 USD - monthly</option>
                                    <option value="Professional">Professional : $1,649.00 USD - monthly</option>
                                </select> </td>
                            </tr>
                        </tbody></table>
                    <input type="hidden" name="currency_code" defaultValue="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribe_SM.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
                </form>                 
            </div>
        );
    }
}