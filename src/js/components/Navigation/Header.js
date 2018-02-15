import React from "react";
import {connect} from "react-redux";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";


@connect((store) => {
  return {
    isLoggedIn: store.visitorStatusReducer.status

  }
})

export default class Header extends React.Component {


  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn)
      return (<UserHeader />);
    else
      return (<GuestHeader />);
  }
 
}