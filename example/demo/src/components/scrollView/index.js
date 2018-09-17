/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-22 12:26:21 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-22 12:27:44
 */
import React, { Component } from "react";
import { ScrollView as RNScrollView } from "react-native";
/**
 * ScrollView
 */
export default class ScrollView extends Component {
  render() {
    return (
      <RNScrollView ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </RNScrollView>
    );
  }
}

ScrollView.propTypes = {};
ScrollView.defaultProps = {};
