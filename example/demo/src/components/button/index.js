/*
 * @Author: jerrychir 
 * @Date: 2018-08-21 14:09:27 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 14:17:30
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
import { ActivityIndicator } from "react-native";

/**
 * Button
 */
export default class Button extends Component {
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
      onLongPress
    } = this.props;
    //
    let textStyle = titleStyle;

    //borderRadius
    radius > 0 && (style.borderRadius = radius);
    // text color
    // titleStyle && (titleStyle.color = themes.color_text_base_inverse);
    // console.log(titleStyle)
    //icon
    icon && [
      icon.type || (icon.type = "MaterialCommunityIcons"),
      icon.name || (icon.name = "adjust"),
      icon.color || (icon.color = "white"),
      icon.size || (icon.size = hp("2.5"))
    ];
    return (
      <Touchable
        style={[
          styles.default,
          styles[type],
          disabled && styles.disabled,
          style
        ]}
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
      </Touchable>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  titleStyle: styleTypes,
  radius: PropTypes.number,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    "primary",
    "primaryTap",
    "success",
    "warning",
    "disabled"
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
