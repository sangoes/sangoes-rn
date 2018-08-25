/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 19:34:08 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-25 19:17:49
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";
import Text from "../text/index";
import styleTypes from "../propTypes/styleTypes";
import variables from "../themes";

/**
 * Badge
 */
export default class Badge extends Component {
  render() {
    const { type, text, color, style } = this.props;
    // style
    const badgeStyle = styleTypes;
    const textStyle = styleTypes;
    if (type == "border") {
      badgeStyle.backgroundColor = "transparent";
      badgeStyle.borderColor = color;
      textStyle.color = color;
    } else {
      badgeStyle.backgroundColor = color;
    }

    return (
      <View style={[styles.container, style]}>
        <View style={[styles[`${type}Badge`], badgeStyle]}>
          {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
        </View>
      </View>
    );
  }
}

Badge.propTypes = {
  type: PropTypes.oneOf(["dot", "round", "rectangle", "border"]),
  color: PropTypes.string,
  text: PropTypes.string
};
Badge.defaultProps = {
  type: "dot",
  color: variables.badge_red
};
