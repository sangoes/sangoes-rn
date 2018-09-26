/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-21 14:09:27 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-18 12:26:45
 */
import React, { Component } from "react";

import styles from "./styles";
import Text from "../text/index";
import PropTypes from "prop-types";
import { Touchable } from "../touch";
import Icon from "../icon";
import styleTypes from "../propTypes/styleTypes";
import nodeTypes from "../propTypes/nodeTypes";
import { hp } from "sangoes-rn-tools";
import View from "../view/index";
import {
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet
} from "react-native";

/**
 * Button
 */
export default class Button extends Component {
  hexToRgba(hex, opacity) {
    return (
      "rgba(" +
      parseInt("0x" + hex.slice(1, 3)) +
      "," +
      parseInt("0x" + hex.slice(3, 5)) +
      "," +
      parseInt("0x" + hex.slice(5, 7)) +
      "," +
      opacity +
      ")"
    );
  }
  render() {
    const {
      style,
      type,
      titleStyle,
      title,
      radius,
      disabled,
      icon,
      large,
      loading,
      loadingProps,
      onPress,
      onLongPress,
      highlight
    } = this.props;
    //
    let textStyle = titleStyle;

    //borderRadius
    radius > 0 && (style.borderRadius = radius);
    // text color
    // titleStyle && (titleStyle.color = themes.color_text_base_inverse);
    // console.log(titleStyle)
    //underlayColor
    const underlayColor =
      highlight ||
      (styles[`${type}Highlight`] &&
        styles[`${type}Highlight`].backgroundColor) ||
      this.hexToRgba(styles[type].backgroundColor, 0.8);
    //icon
    icon && [
      icon.type || (icon.type = "MaterialCommunityIcons"),
      icon.name || (icon.name = "adjust"),
      icon.color || (icon.color = "white"),
      icon.size || (icon.size = hp("2.5"))
    ];
    //transparent
    if (type === "transparent") {
      delete styles.default.marginLeft;
      delete styles.default.marginRight;
    }
    return (
      <TouchableHighlight
        style={[
          styles.default,
          styles[type],
          disabled && styles.disabled,
          style
        ]}
        underlayColor={underlayColor}
        activeOpacity={1}
        disabled={disabled}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View type="horizontal" style={styles.btnItem}>
          {/* loading */}
          {loading && (
            <ActivityIndicator
              animating
              style={[styles.indicator]}
              color={loadingProps.color}
              size={loadingProps.size}
              {...loadingProps}
            />
          )}
          {/* icon */}
          {icon && (
            <Icon
              style={styles.btnIcon}
              type={icon.type}
              name={icon.name}
              color={icon.color}
              size={icon.size}
            />
          )}

          {/* title */}
          <Text style={[styles.textWhite, textStyle]}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  titleStyle: styleTypes,
  highlight: PropTypes.string,
  radius: PropTypes.number,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "disabled",
    "transparent"
  ]),
  icon: nodeTypes,
  loading: PropTypes.bool,
  loadingProps: PropTypes.object,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
};
Button.defaultProps = {
  type: "primary",
  title: "Button",
  radius: 0,
  loadingProps: {
    color: "white",
    size: "small"
  }
};
