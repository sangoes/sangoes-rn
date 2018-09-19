/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-19 18:10:29 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-19 22:37:16
 * ActionSheet 动作模板
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import View from "../view";
import styles from "./styles";
import Popup from "../popup";
import { _, uuid, screenWidth, wp } from "sangoes-rn-tools";
import { Animated, TouchableHighlight } from "react-native";
import Cell from "../cell";
import Text from "../text";
import Divider from "../divider";
import { Easing } from "react-native";
import Blank from "../blank";

export default class ActionSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      bottomAnim: new Animated.Value(-100)
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
    Animated.timing(this.state.bottomAnim, {
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      duration: 200
    }).start(() => {
      console.log("ddddd");
    });
  }
  /**
   * hide 隐藏
   */
  hide() {
    Animated.timing(this.state.bottomAnim, {
      toValue: -500,
      easing: Easing.inOut(Easing.ease),
      duration: 200
    }).start(() => {
      this.setState({
        visible: false,
        bottomAnim: new Animated.Value(-100)
      });
    });
  }
  render() {
    const { buttons, title } = this.props;
    const actionArry = [];
    // title FIXME 待修改标题
    title &&
      actionArry.push(
        <View key={uuid.v1()}>
          <Cell style={styles.actionButton}>
            <Text>{title}</Text>
          </Cell>
          <Divider />
        </View>
      );
    // buttons
    for (let index = 0; index < buttons.length; index++) {
      const element = buttons[index];
      actionArry.push(
        <View key={uuid.v1()}>
          {/* button FIXME 点击收的颜色 */}
          <TouchableHighlight onPress={element.onPress}>
            <Cell style={styles.actionButton}>
              <Text style={element.style}>{element.text}</Text>
            </Cell>
          </TouchableHighlight>
          {/* blank divider */}
          {index === buttons.length - 2 ? (
            <Blank style={styles.actionBlank} />
          ) : (
            <Divider />
          )}
        </View>
      );
    }
    return (
      <Popup
        animationType="fade"
        type="overlay"
        visible={this.state.visible}
        onCanclePress={() => {
          this.hide();
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            width: screenWidth,
            bottom: this.state.bottomAnim
          }}
        >
          {actionArry}
        </Animated.View>
      </Popup>
    );
  }
}

ActionSheet.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.array
};
ActionSheet.defaultProps = {};
