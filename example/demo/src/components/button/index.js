/*
 * @Author: jerrychir 
 * @Date: 2018-08-21 14:09:27 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-21 15:58:11
 */
import React, { Component } from "react";

import styles from "./styles";
import Text from "../text/index";
import PropTypes from "prop-types";
import { Touchable } from "../touch";
import themes from "../themes";

/**
 * Button
 */
export default class Button extends Component {
  render() {
    const { type, titleStyle } = this.props;
    return (
      <Touchable style={[styles.default, styles[type]]}>
        <Text style={titleStyle}>Button</Text>
      </Touchable>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  type: PropTypes.oneOf(["primary"])
};
Button.defaultProps = {
  type: "primary",
  titleStyle: {
    color: themes.color_text_base_inverse
  }
};
