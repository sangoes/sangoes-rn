/*
 * @Author: jerrychir 
 * @Date: 2018-08-25 22:06:01 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-09 10:21:54
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";
import { TextInput as RNTextInput,TextInputProps } from "react-native";
import variables from "../themes";

/**
 * TextInput
 */
export default class TextInput extends Component {
  render() {
    const { type, style, placeholderTextColor } = this.props;
    return (
      <RNTextInput
        style={[styles[type], style]}
        underlineColorAndroid="transparent"
        // multiline={false}
        placeholderTextColor={
          placeholderTextColor
            ? placeholderTextColor
            : variables.color_text_placeholder
        }
        {...this.props}
      />
    );
  }
}

TextInput.propTypes = {
  type: PropTypes.oneOf(["default"]),
  ...RNTextInput.propTypes
};
TextInput.defaultProps = {
  type: "default"
};
