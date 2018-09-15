/*
 * @Author: jerrychir 
 * @Date: 2018-09-15 10:25:12 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-15 16:52:11
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Modal as RNModal } from "react-native";
import Text from "../text";
import View from "../view/index";

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
  render() {
    return (
      <View>
        <RNModal
          animationType="slide"
          transparent={false}
          visible={this.state.visible}
          onRequestClose={() => {}}
        >
          <Text>fdsadfs</Text>
        </RNModal>
      </View>
    );
  }
}

Modal.propTypes = {};
Modal.defaultProps = {};
