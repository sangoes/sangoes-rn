/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 09:04:11 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 10:51:43
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";

/**
 * Divider
 */
export default class Divider extends Component {
  render() {
    const { type, style } = this.props;
    return <View ref={c => (this._root = c)} style={[styles[type], style]} />;
  }
}

Divider.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"])
};
Divider.defaultProps = {
  type: "horizontal"
};
