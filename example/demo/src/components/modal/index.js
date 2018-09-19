/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 10:25:12 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-18 22:50:06
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
import { _, uuid, screenWidth,wp } from "sangoes-rn-tools";
import variables from "../themes";
import { Animated } from "react-native";
import { BlurView, VibrancyView } from "react-native-blur";
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
      visible: false,
      heightAnim: new Animated.Value(0),
      viewRef: null
    };
  }
  componentDidMount() {}
  /**
   * show 展示
   */
  show() {
    this.setState({
      visible: true
    });
    Animated.timing(this.state.heightAnim, {
      toValue: 200,
      duration: 150
    }).start();
  }
  /**
   * hide 隐藏
   */
  hide() {
    this.setState({
      visible: false,
      heightAnim: new Animated.Value(0)
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
        // const btnArry = [];
        // _.forEach(buttons, item => {
        //   btnArry.push(
        //     <View key={uuid.v1()}>
        //       <Button
        //         titleStyle={styles.buttonTitle}
        //         style={[styles.button, item.style]}
        //         title={item.text}
        //         onPress={item.onPress}
        //       />
        //       <Divider />
        //     </View>
        //   );
        // });
        // btnData.push(<View key={uuid.v1()}>{btnArry}</View>);
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
        </View>
        <View>{btnData}</View>
      </View>
    );
  }
  // 渲染ActionSheet
  _renderActionSheet() {
    return (
      <Animated.View
        style={{
          position: "absolute",
          backgroundColor: "white",
          width: screenWidth,
          minHeight: this.state.heightAnim,
          bottom: 0
          // opacity: 0.6
        }}
      >
        {/* <BlurView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
          // viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={30}
        /> */}
        <Button
          style={{
            position: "absolute",
            // marginLeft: wp("0"),
            // marginRight: wp("0"),
            bottom: 0,
            width: screenWidth
            // backgroundColor: "white"
          }}
          title="取消"
          titleStyle={{ color: "black" }}
        />
      </Animated.View>
    );
  }
  render() {
    const { type, onCanclePress, animationType } = this.props;
    return (
      <Popup
        animationType={animationType}
        type="overlay"
        visible={this.state.visible}
        onCanclePress={() => {
          this.hide();
          onCanclePress && onCanclePress();
        }}
      >
        {/* alert */}
        {type === "alert" && this._renderAlert()}
        {/* actionSheet */}
        {type === "actionSheet" && this._renderActionSheet()}
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
  animationType: PropTypes.oneOf(["none", "slide", "fade"]),
  buttons: PropTypes.array //
};
Modal.defaultProps = {
  animationType: "none",
  type: "modal",
  title: "Alert Title",
  subTitle: "My Alert Msg",
  buttons: [],
  animationType: "fade"
};
