/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-17 14:01:34 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 14:12:04
 * 
 * OverLay 蒙层
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";

export default class OverLay extends Component {
  render() {
    return <View style={styles.overlay}>{this.props.children}</View>;
  }
}
OverLay.propTypes = {};
OverLay.defaultProps = {};
