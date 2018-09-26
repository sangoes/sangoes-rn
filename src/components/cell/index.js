/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-19 18:01:39 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-19 20:33:24
 * Cell
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import View from "../view";
import styles from "./styles";

export default class Cell extends React.Component {
  render() {
    const { style } = this.props;
    return <View style={[styles.whiteCell,style]}>{this.props.children}</View>;
  }
}

Cell.propTypes = {
  type: PropTypes.oneOf(["default", "section"])
};
Cell.defaultProps = {
  type: "default"
};
