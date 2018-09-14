/*
 * @Author: jerrychir 
 * @Date: 2018-09-14 14:40:13 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-14 15:30:08
 */
import React, { Component } from "react";
import styles from "./styles";
import View from "../view/index";
import variables from "../themes";

/**
 * InputItem
 */
export default class InputItem extends Component {
  render() {
    const { type, style, placeholderTextColor } = this.props;
    return <View />;
  }
}
InputItem.propTypes = {
  type: PropTypes.oneOf(["default", "section"]),

};
InputItem.defaultProps = {
};