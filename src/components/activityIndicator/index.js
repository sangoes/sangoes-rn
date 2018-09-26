/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 13:14:18 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-23 14:26:31
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";
import { ActivityIndicator as RNActivityIndicator } from "react-native";
import Text from "../text/index";

/**
 * ActivityIndicator
 */
export default class ActivityIndicator extends Component {
  // spinnder
  _renderSpinner() {
    const { size, color, animating, title } = this.props;
    return (
      <View style={styles.spinner}>
        <RNActivityIndicator size={size} color={color} animating={animating} />
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    );
  }

  render() {
    const { animating } = this.props;
    if (animating) {
      return this._renderSpinner();
    }
    return null;
  }
}

ActivityIndicator.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  color: PropTypes.string,
  animating: PropTypes.bool,
  title: PropTypes.string
};
ActivityIndicator.defaultProps = {
  animating: true,
  color: "gray",
  size: "small",
};
