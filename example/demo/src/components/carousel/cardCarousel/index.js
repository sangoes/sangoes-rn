/*
 * @Author: jerrychir 
 * @Date: 2018-08-25 21:33:41 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-25 21:45:11
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";
import Text from "../text/index";
import styleTypes from "../propTypes/styleTypes";
import variables from "../themes";

/**
 * CardCarousel
 */
export default class CardCarousel extends Component {
  render() {
    
    return (
        <View>
            
        </View>
    );
  }
}

CardCarousel.propTypes = {
  type: PropTypes.oneOf(["dot"]),
};
CardCarousel.defaultProps = {
  type: "dot",
};