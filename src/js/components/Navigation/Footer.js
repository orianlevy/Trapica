import React from "react";
import {connect} from "react-redux";
import GuestFooter from "./GuestFooter";
import UserFooter from "./UserFooter";


@connect((store) => {
  return {
    isLoggedIn: store.visitorStatusReducer.status

  }
})

export default class Header extends React.Component {


  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn)
      return (<UserFooter />);
    else
      return (<GuestFooter />);
  }
 
}