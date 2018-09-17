/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 14:29:29 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-23 19:16:38
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Modal } from "react-native";
import View from "../view/index";
import Text from "../text/index";
import { Animated } from "react-native";
import ActivityIndicator from "../activityIndicator";

/**
 * Toast
 * type:'center' 'top' 'bottom'
 */

export default class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      fadeAnim: new Animated.Value(0),
      title: null,
      loading: false,
      type: "center"
    };
  }
  // show
  showToast(type, text, duration) {
    this.setState({
      modalVisible: true,
      title: text,
      type: type
    });
    //duration
    const toastDuration = duration || 1500;
    this.closeTimeout = setTimeout(
      this.closeToast.bind(this, "timeout"),
      toastDuration
    );
    // Fade the toast in now.
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200
    }).start();
  }
  // close Modal
  closeModal(reason) {
    this.setState({
      modalVisible: false,
      fadeAnim: new Animated.Value(0),
      title: null,
      loading: false,
      type: "center"
    });
    const { onClose } = this.props;
    if (onClose && typeof onClose === "function") {
      onClose(reason);
    }
  }
  // close Toast
  closeToast(reason) {
    clearTimeout(this.closeTimeout);
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 200
    }).start(this.closeModal.bind(this, reason));
  }
  //show loading
  showLoading(text) {
    this.setState({
      modalVisible: true,
      loading: true,
      title: text
    });
    // Fade the toast in now.
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200
    }).start();
  }
  // hide loading
  hideToastLoading() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 200
    }).start(this._closeLoading.bind(this));
  }
  // close loading
  _closeLoading() {
    this.setState({
      modalVisible: false,
      fadeAnim: new Animated.Value(0),
      title: null,
      loading: false,
      type: "center"
    });
    const { onClose } = this.props;
    if (onClose && typeof onClose === "function") {
      onClose();
    }
  }
  render() {
    const { type, loading, title } = this.state;
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {}}
      >
        <Animated.View style={[styles.container, styles[`${type}Container`]]}>
          <View style={styles.toastView}>
            {loading ? (
              <View>
                <ActivityIndicator size="large" color="white" />
                {title && (
                  <Text style={styles.toastText}>{this.state.title}</Text>
                )}
              </View>
            ) : (
              <Text style={styles.toastText}>{this.state.title}</Text>
            )}
          </View>
        </Animated.View>
      </Modal>
    );
  }
}

Toast.propTypes = {
  onClose: PropTypes.func
};
Toast.defaultProps = {};
