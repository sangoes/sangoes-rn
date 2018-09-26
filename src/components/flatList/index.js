/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-22 22:54:25 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-22 22:54:52
 */
import React, { Component } from "react";
import { FlatList as RNFlatList } from "react-native";
import PropTypes from "prop-types";

/**
 * SectionList
 */
export default class FlatList extends Component {
  render() {
    return <RNFlatList ref={c => (this._root = c)} {...this.props} />;
  }
}

FlatList.propTypes = {};
FlatList.defaultProps = {};
