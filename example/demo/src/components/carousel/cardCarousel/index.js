/*
 * @Author: jerrychir 
 * @Date: 2018-08-25 21:33:41 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-08 17:08:44
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../../view/index";

/**
 * CardCarousel
 */
export default class CardCarousel extends Component {
  render() {
    return <View>dsafdsafd</View>;
  }
}

CardCarousel.propTypes = {
  type: PropTypes.oneOf(["dot"])
};
CardCarousel.defaultProps = {
  type: "dot"
};
