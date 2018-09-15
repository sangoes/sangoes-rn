/*
 * @Author: jerrychir 
 * @Date: 2018-09-15 10:25:12 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-15 15:35:06
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../../view/index";
import MCPicker from "rmc-picker/lib/Picker";
import Popup from "rmc-picker/lib/Popup";
import PopupStyles from "rmc-picker/lib/PopupStyles";
import Text from "../../text";
import TextButton from "../../textButton";
import nodeTypes from "../../propTypes/nodeTypes";
import _ from "lodash";

/**
 * Picker
 */
export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value: "1"
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
  onChange = value => {
    console.log("onChange", value);
    this.setState({
      value
    });
  };
  render() {
    //props
    const {
      title,
      okText,
      cancleText,
      onOkPress,
      onCanclePress,
      content,
      data
    } = this.props;
    const data2 = [
      [{ one: "1" }, { two: "2" }, { three: "3" }],
      [{ wa: "1" }, { ha: "2" }, { ec: "3" }]
    ];
    //arry data
    const itemData = new Array();
    _.forEach(data2, array => {
      const pickerData = new Array();
      _.forEach(array, item => {
        return 1;
      });
      console.log("dsafsda")
    });
    //content
    const popupContent = (
      <View>
        <MCPicker
          selectedValue={this.state.value}
          onValueChange={this.onChange}
        >
          <MCPicker.Item value="1">one</MCPicker.Item>
          <MCPicker.Item value="2">two</MCPicker.Item>
          <MCPicker.Item value="3">three</MCPicker.Item>
          <MCPicker.Item value="4">four</MCPicker.Item>
          <MCPicker.Item value="5">five</MCPicker.Item>
          <MCPicker.Item value="6">six</MCPicker.Item>
          <MCPicker.Item value="7">seven</MCPicker.Item>
          <MCPicker.Item value="8">eight</MCPicker.Item>
        </MCPicker>
      </View>
    );
    return (
      <Popup
        visible={this.state.visible}
        styles={PopupStyles}
        style={styles.root}
        title={<Text>{title}</Text>}
        okText={
          <TextButton
            title={okText}
            style={styles.btnStyle}
            type="heading"
            onPress={() => {
              this.hide();
              onOkPress && onOkPress();
            }}
          />
        }
        dismissText={
          <TextButton
            style={styles.btnStyle}
            title={cancleText}
            type="heading"
            onPress={() => {
              this.hide();
              onCanclePress && onCanclePress();
            }}
          />
        }
        content={popupContent}
      />
    );
  }
}

Picker.propTypes = {
  title: PropTypes.string, //title 标题
  okText: PropTypes.string, //ok 确定
  onOkPress: PropTypes.func, //确定函数
  cancleText: PropTypes.string, //cacle 取消
  onCanclePress: PropTypes.func, //取消函数
  data: PropTypes.array, //数据数组 data不为空是content为空
  content: nodeTypes //content不为空data为空
};
Picker.defaultProps = {
  title: "default title",
  okText: "OK",
  cancleText: "CANCLE"
};
