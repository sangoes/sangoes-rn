/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-25 21:33:41 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-08 17:07:37
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../../view/index";
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
