/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 14:29:29 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-13 12:05:54
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Modal } from "react-native";
import View from "../view";
import Text from "../text";
import { Animated } from "react-native";
import ActivityIndicator from "../activityIndicator/index";

/**
 * Toast
 * type:'center' 'top' 'bottom'
 */

export default class ToastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const { duration, type } = this.props;
    !(type === "loading") &&
      (this.closeTimeout = setTimeout(
        this.closeToast.bind(this, "timeout"),
        duration
      ));
    // Fade the toast in now.
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200
    }).start(() => {});
  }

  componentWillUnmount() {
    this.closeTimeout && clearTimeout(this.closeTimeout);
  }
  // close Modal
  closeModal(reason) {
    this.setState({
      modalVisible: false,
      fadeAnim: new Animated.Value(0)
    });
    const { onClose } = this.props;
    if (onClose && typeof onClose === "function") {
      onClose(reason);
    }
    // onAnimationEnd
    this.props.onAnimationEnd && this.props.onAnimationEnd();
  }
  // close Toast
  closeToast(reason) {
    this.closeTimeout && clearTimeout(this.closeTimeout);
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 200
    }).start(this.closeModal.bind(this, reason));
  }

  render() {
    const { type, title } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {}}
      >
        <Animated.View style={[styles.container, styles[`${type}Container`]]}>
          <View style={styles.toastView}>
            {type === "loading" && (
              <ActivityIndicator size="large" color="white" />
            )}
            {title && <Text style={styles.toastText}>{title}</Text>}
          </View>
        </Animated.View>
      </Modal>
    );
  }
}

ToastContainer.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.oneOf(["center", "top", "bottom", "loading"]),
  title: PropTypes.string,
  duration: PropTypes.number,
  onAnimationEnd: PropTypes.func
};
ToastContainer.defaultProps = {
  type: "center",
  duration: 1500
};
