/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 17:59:20 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-21 17:48:00
 */
import React, { Component } from "react";
import { View as RNView } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default class View extends Component {
  render() {
    const { type, style } = this.props;
    return (
      <RNView
        ref={c => (this._root = c)}
        {...this.props}
        style={[styles[type], style]}
      >
        {this.props.children}
      </RNView>
    );
  }
}

View.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"])
};
View.defaultProps = {
  type: "vertical"
};
