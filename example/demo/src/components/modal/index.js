/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 10:25:12 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 14:52:57
 * Modal 对话框
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Modal as RNModal, TouchableOpacity } from "react-native";

/**
 * Modal 对话框
 */
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  /**
   * show 展示
   */
  show() {
    this.setState({
      visible: true
    });
  }
  /**
   * hide 隐藏
   */
  hide() {
    this.setState({
      visible: false
    });
  }
  render() {
    const { type, animationType } = this.props;
    //判断是否透明
    let transparent = true;
    type === "default" ? (transparent = false) : (transparent = true);
    return (
      <RNModal
        animationType={animationType}
        transparent={transparent}
        visible={this.state.visible}
        onRequestClose={this.hide}
        onShow={() => {}}
      >
        {/* overlay */}
        <TouchableOpacity
          style={[{ flex: 1 }, type === "overlay" && styles.overlay]}
          activeOpacity={1}
          onPress={() => {
            this.hide();
          }}
        >
          {/* children */}
          {this.props.children}
        </TouchableOpacity>
      </RNModal>
    );
  }
}

Modal.propTypes = {
  type: PropTypes.oneOf(["default", "transparent", "overlay"]),
  animationType: PropTypes.oneOf(["none", "slide", "fade"])
};
Modal.defaultProps = {
  animationType: "none",
  type: "default"
};
