/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 09:56:51 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 10:10:33
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";

/**
 * SectionList
 */
export default class Blank extends Component {
  render() {
    const { type } = this.props;
    return <View ref={c => (this._root = c)} style={styles[type]} />;
  }
}

Blank.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"])
};
Blank.defaultProps = {
  type: "horizontal"
};
