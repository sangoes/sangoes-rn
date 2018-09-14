/*
 * @Author: jerrychir 
 * @Date: 2018-08-25 22:06:01 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-14 17:01:18
 */
import React, { Component } from "react";
import { TextInput as RNTextInput } from "react-native";

/**
 * TextInput
 */
export default class TextInput extends Component {
  render() {
    const { style } = this.props;
    return (
      <RNTextInput
        style={style}
        underlineColorAndroid="transparent"
        {...this.props}
      />
    );
  }
}

TextInput.propTypes = {
  ...RNTextInput.propTypes
};
TextInput.defaultProps = {};
