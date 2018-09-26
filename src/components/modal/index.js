/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 10:25:12 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-19 21:25:42
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
import { _, uuid, screenWidth, wp } from "sangoes-rn-tools";
import { Animated } from "react-native";
import Cell from "../cell";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import Blank from "../blank";
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
      heightAnim: new Animated.Value(-100),
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
      toValue: 0,
      duration: 150
    }).start();
  }
  /**
   * hide 隐藏
   */
  hide() {
    this.setState({
      visible: false,
      heightAnim: new Animated.Value(-100)
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
          // flex:this.state.heightAnim,
          position: "absolute",
          width: screenWidth,
          // minHeight: this.state.heightAnim,
          bottom: this.state.heightAnim
        }}
      >
        {/* cancle */}
        <TouchableHighlight onPress={()=>{}}>
          <Cell style={{ heghit: 49, alignItems: "center" }}>
            <Text>显示</Text>
          </Cell>
        </TouchableHighlight>
        <Divider/>
        {/* cancle */}
        <TouchableHighlight onPress={()=>{}}>
          <Cell style={{ heghit: 49, alignItems: "center" }}>
            <Text>显示</Text>
          </Cell>
        </TouchableHighlight>
        <Divider/>
        {/* cancle */}
        <TouchableHighlight onPress={()=>{}}>
          <Cell style={{ heghit: 49, alignItems: "center" }}>
            <Text>确定</Text>
          </Cell>
        </TouchableHighlight>
        <View style={{height:5,backgroundColor: "white", opacity: 0.8}}/>
        {/* cancle */}
        <TouchableHighlight onPress={()=>{}}>
          <Cell style={{ heghit: 49, alignItems: "center" }}>
            <Text>取消</Text>
          </Cell>
        </TouchableHighlight>
        
        
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
  type: "modal",
  title: "Alert Title",
  subTitle: "My Alert Msg",
  buttons: [],
  animationType: "fade"
};
