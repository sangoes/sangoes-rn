/*
 * @Author: jerrychir 
 * @Date: 2018-08-21 14:09:27 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-21 18:30:57
 */
import React, { Component } from "react";

import styles from "./styles";
import Text from "../text/index";
import PropTypes from "prop-types";
import { Touchable } from "../touch";
import themes from "../themes";
import Icon from "../icon";
import styleTypes from "../propTypes/styleTypes";
import nodeTypes from "../propTypes/nodeTypes";
import { hp } from "../../utils/dimension";
import View from "../view/index";

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
      icon
    } = this.props;

    //borderRadius
    radius > 0 && (style.borderRadius = radius);
    //icon
    icon && [
      icon.type || (icon.type = "MaterialCommunityIcons"),
      icon.name || (icon.name = "adjust"),
      icon.color || (icon.color = "white"),
      icon.size || (icon.size = hp("2.3"))
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
      >
        <View type="horizontal">
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
          <Text style={titleStyle}>{title}</Text>
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
  icon: nodeTypes
};
Button.defaultProps = {
  type: "primary",
  title: "Button",
  radius: 0,
  titleStyle: {
    color: themes.color_text_base_inverse
  }
};
