/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 22:50:31 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 09:22:47
 */
import React, { Component } from "react";
import { SectionList as RNSectionList } from "react-native";
import PropTypes from "prop-types";

/**
 * SectionList
 */
export default class SectionList extends Component {
  render() {
    
    return (
      <RNSectionList
        ref={c => (this._root = c)}
        {...this.props}
      />
    );
  }
}

SectionList.propTypes = {};
SectionList.defaultProps = {};
