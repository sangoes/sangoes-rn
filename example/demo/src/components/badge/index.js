/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 19:34:08 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 21:41:30
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";
import Text from "../text/index";

/**
 * Badge
 */
export default class Badge extends Component {
  render() {
    const { type, text, style, color } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={[styles[`${type}Badge`], { backgroundColor: color }]}>
          {text && <Text style={styles.text}>{text}</Text>}
        </View>
      </View>
    );
  }
}

Badge.propTypes = {
  type: PropTypes.oneOf(["dot", "text"]),
  color: PropTypes.string,
  text: PropTypes.string
};
Badge.defaultProps = {
  type: "dot"
};
