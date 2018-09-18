/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 10:25:12 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-18 11:04:01
 * Modal 对话框
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import Popup from "../popup";
import Text from "../text";
import View from "../view";
import Divider from "../divider";
import Button from "../button/index";
import { _, uuid } from "sangoes-rn-tools";
import variables from "../themes";
/**
 * Modal 对话框
 *
 *
 *
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
  // 渲染alert
  _renderAlert() {
    const { title, subTitle, cancleTitle, buttons } = this.props;

    //alert
    const btnData = [];
    switch (buttons.length) {
      case 0:
        btnData.push(
          <Button
            key={uuid.v1()}
            titleStyle={styles.buttonTitle}
            style={[styles.button]}
            title={cancleTitle || "Cancle"}
            onPress={() => this.hide()}
          />
        );
        break;
      case 1:
        const btnArry = [];
        _.forEach(buttons, item => {
          btnArry.push(
            <View key={uuid.v1()}>
              <Button
                titleStyle={styles.buttonTitle}
                style={[styles.button, item.style]}
                title={item.text}
                onPress={item.onPress}
              />
              <Divider />
            </View>
          );
        });
        btnData.push(<View key={uuid.v1()}>{btnArry}</View>);
        break;
      case 2:
        const btnTwoArry = [];
        let index = 0;
        _.forEach(buttons, item => {
          btnTwoArry.push(
            <View key={uuid.v1()} type="horizontal">
              <Button
                titleStyle={styles.buttonTitle}
                // FIXME 需要修改
                style={[styles.twoButton, item.style]}
                title={item.text}
                onPress={item.onPress}
              />
              {/* TODO FIXME index 需要优化 */}
              {index == 0 && <Divider type="vertical" />}
            </View>
          );
          index++;
        });
        btnData.push(
          <View key={uuid.v1()} style={styles.buttonsStyle}>
            {btnTwoArry}
          </View>
        );
        break;
      case 3:
        const btnArry = [];
        _.forEach(buttons, item => {
          btnArry.push(
            <View key={uuid.v1()}>
              <Button
                titleStyle={styles.buttonTitle}
                style={[styles.button, item.style]}
                title={item.text}
                onPress={item.onPress}
              />
              <Divider />
            </View>
          );
        });
        btnData.push(<View key={uuid.v1()}>{btnArry}</View>);
        break;
      default:
        break;
    }
    return (
      <View style={styles.alertView}>
        <View style={styles.alertBg}>
          {/* title */}
          <Text type="heading" style={styles.title}>
            {title}
          </Text>
          {/* subTitle */}
          <Text style={styles.subTitle}>{subTitle}</Text>
          {/* divider */}
          <Divider />
          {btnData}
        </View>
      </View>
    );
  }
  render() {
    const { type, animationType, onCanclePress } = this.props;
    return (
      <Popup
        animationType="fade"
        type="overlay"
        visible={this.state.visible}
        onCanclePress={() => {
          this.hide();
          onCanclePress && onCanclePress();
        }}
      >
        {/* alert */}
        {type === "alert" && this._renderAlert()}
      </Popup>
    );
  }
}

Modal.propTypes = {
  type: PropTypes.oneOf(["modal", "alert", "actionSheet"]),
  onCanclePress: PropTypes.func,
  title: PropTypes.string, //标题
  subTitle: PropTypes.string, //副标题
  cancleTitle: PropTypes.string,
  buttons: PropTypes.array //
};
Modal.defaultProps = {
  animationType: "none",
  type: "modal",
  title: "Alert Title",
  subTitle: "My Alert Msg",
  buttons: []
};
