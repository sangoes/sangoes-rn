/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-14 22:20:57 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-14 23:09:41
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Switch as RNSwitch } from "react-native";
/**
 * switch 开关
 */
export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trunOn: this.props.trunOn
    };
  }
  render() {
    const {
      onSwitchChange,
      disabled,
      onTintColor,
      thumbTintColor,
      tintColor
    } = this.props;
    return (
      <RNSwitch
        value={this.state.trunOn}
        disabled={disabled}
        onTintColor={onTintColor}
        thumbTintColor={thumbTintColor}
        tintColor={tintColor}
        onValueChange={value => {
          onSwitchChange && onSwitchChange(value);
          this.setState({
            trunOn: value
          });
        }}
      />
    );
  }
}
Switch.propTypes = {
  onSwitchChange: PropTypes.func, //改变只
  trunOn: PropTypes.bool, //开 关
  disabled: PropTypes.bool, //
  onTintColor: PropTypes.string, //打开是的背景颜色
  thumbTintColor: PropTypes.string, //Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow.
  tintColor: PropTypes.string //Border color on iOS and background color on Android when the switch is turned off.
};
Switch.defaultProps = {};
