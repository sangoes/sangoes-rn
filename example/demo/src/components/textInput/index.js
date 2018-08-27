/*
 * @Author: jerrychir 
 * @Date: 2018-08-25 22:06:01 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-25 22:06:31
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";


/**
 * TextInput
 */
export default class TextInput extends Component {
  render() {
    return (
      <View>
       
      </View>
    );
  }
}

TextInput.propTypes = {
  type: PropTypes.oneOf(["dot"])
};
TextInput.defaultProps = {
  type: "dot"
};