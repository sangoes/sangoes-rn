/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-19 17:47:16 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-19 17:59:15
 */
import React from "react";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";

export default class Touchables extends React.Component {
  render() {
    const { type } = this.props;

    if (type === "opacity") {
      return (
        <TouchableOpacity activeOpacity={0.8} {...this.props}>
          {this.props.children}
        </TouchableOpacity>
      );
    } else if (type === "highkight") {
      return(
        <TouchableHighlight>{this.props.children}</TouchableHighlight>
      )
    }
  }
}

Modal.propTypes = {
  type: PropTypes.oneOf(["opacity", "highkight"])
};
Modal.defaultProps = {
  type: "opacity"
};
