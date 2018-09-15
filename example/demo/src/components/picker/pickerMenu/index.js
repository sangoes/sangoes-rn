/*
 * @Author: jerrychir 
 * @Date: 2018-09-15 09:14:40 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-15 09:15:30
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../../view/index";

/**
 * PickerMenu
 */
export default class PickerMenu extends Component {
  render() {
    return <View>dsafdsafd</View>;
  }
}

PickerMenu.propTypes = {
  type: PropTypes.oneOf(["dot"])
};
PickerMenu.defaultProps = {
  type: "dot"
};
