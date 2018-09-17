/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 10:25:12 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 16:14:09
 * Popup 弹窗
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Modal as RNModal, TouchableOpacity } from "react-native";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { type, animationType, visible, onCanclePress, onShow } = this.props;
    //判断是否透明
    let transparent = true;
    type === "default" ? (transparent = false) : (transparent = true);
    return (
      <RNModal
        animationType={animationType}
        transparent={transparent}
        visible={visible}
        onRequestClose={this.hide}
        onShow={onShow}
      >
        {/* overlay */}
        <TouchableOpacity
          style={[{ flex: 1 }, type === "overlay" && styles.overlay]}
          activeOpacity={1}
          onPress={onCanclePress}
        >
          {/* children */}
          {this.props.children}
        </TouchableOpacity>
      </RNModal>
    );
  }
}

Popup.propTypes = {
  type: PropTypes.oneOf(["default", "transparent", "overlay"]),
  animationType: PropTypes.oneOf(["none", "slide", "fade"]),
  visible: PropTypes.bool,
  onCanclePress: PropTypes.func,
  onShow: PropTypes.func
};
Popup.defaultProps = {
  animationType: "none",
  type: "default"
};
