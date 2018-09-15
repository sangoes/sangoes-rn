/*
 * @Author: jerrychir 
 * @Date: 2018-09-15 14:29:15 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-15 14:42:44
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Touchable } from "../touch";
import Text from "../text";

/**
 * TextButton
 */
export default class TextButton extends Component {
  render() {
    const { title, onPress, onLongPress } = this.props;
    return (
      <Touchable onPress={onPress} onLongPress={onLongPress}>
        <Text {...this.props}>{title}</Text>
      </Touchable>
    );
  }
}

TextButton.propTypes = {
  ...Text.propTypes,
  title: PropTypes.string, //
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
};
TextButton.defaultProps = {};
