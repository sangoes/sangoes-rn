/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 09:56:51 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-19 17:39:15
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";
import variables from "../themes";

/**
 * SectionList
 */
export default class Blank extends Component {
  render() {
    const { type, style, size } = this.props;
    //index.js
    const margin = variables[`h_spacing_${size}`];
    const height = variables[`v_spacing_${size}`];
    return (
      <View
        style={[
          type === "space" && { height: height },
          type === "wing" && { marginLeft: margin, marginRight: margin },
          type === "hwing" && { width: margin },
          style
        ]}
      >
        {this.props.children}
      </View>
    );
  }
}

Blank.propTypes = {
  type: PropTypes.oneOf(["space", "wing", "hwing"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"])
};
Blank.defaultProps = {
  type: "space",
  size: "sm"
};
