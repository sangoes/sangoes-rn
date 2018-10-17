/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-19 18:10:29 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-17 22:35:25
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
import Modal from "rmc-dialog/lib/Modal";

export default class ActionSheetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible || false
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
    const { buttons, title } = this.props;
    const actionArry = [];
    // title FIXME 待修改标题
    title &&
      actionArry.push(
        <View key={uuid.v1()}>
          <Cell style={styles.actionButton}>
            <Text>{title}</Text>
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
      <Modal
        animationDuration={200}
        animateAppear
        visible={this.state.visible}
        onAnimationEnd={this.props.onAnimationEnd}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0
        }}
        animationType="slide-up"
        maskClosable
        onClose={() => {
          this.hide();
        }}
      >
        <View
          style={{
            position: "absolute",
            width: screenWidth,
            bottom: 0
          }}
        >
          {actionArry}
        </View>
      </Modal>
    );
  }
}

ActionSheetContainer.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.array,
  onAnimationEnd: PropTypes.func,
  visible: PropTypes.bool
};
ActionSheetContainer.defaultProps = {};
