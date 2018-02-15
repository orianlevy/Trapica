import React from "react";
import {
    connect
} from "react-redux";
import {
  setTitle,
  changeVisitorStatus,
  showNavigationBar
} from "../../../actions/action";



@connect((store) => {
    return {

    }
})

export default class GDashboard extends React.Component {


  componentWillMount() {
    this.props.dispatch(changeVisitorStatus(true))
    this.props.dispatch(setTitle("Google Dashboard"))
    this.props.dispatch(showNavigationBar(true))
  }        

  render() {
    return (
      <div>
      </div>
    );
    }
  }
