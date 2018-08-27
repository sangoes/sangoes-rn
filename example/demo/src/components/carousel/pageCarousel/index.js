/*
 * @Author: jerrychir 
 * @Date: 2018-08-25 21:33:41 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-25 21:47:50
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";
import Text from "../text/index";
import styleTypes from "../propTypes/styleTypes";
import variables from "../themes";
import ScrollView from "../../scrollView";

/**
 * PageCarousel
 */
export default class PageCarousel extends Component {
  render() {
    return (
      <View>
        <ScrollView
          horizontal={true}
          pointerEvents="none"
          ref={ref => (this.scrollView = ref)}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

PageCarousel.propTypes = {
  type: PropTypes.oneOf(["dot"])
};
PageCarousel.defaultProps = {
  type: "dot"
};
