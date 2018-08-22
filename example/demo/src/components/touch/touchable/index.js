/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 20:58:38 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-22 14:59:40
 */
import React from "react";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

let TouchableComponent;

TouchableComponent = TouchableOpacity;

if (TouchableComponent !== TouchableNativeFeedback) {
  TouchableComponent.SelectableBackground = () => ({});
  TouchableComponent.SelectableBackgroundBorderless = () => ({});
  TouchableComponent.Ripple = () => ({});
  TouchableComponent.canUseNativeForeground = () => false;
}

export default class Touchable extends React.Component {
  static SelectableBackground = TouchableComponent.SelectableBackground;
  static SelectableBackgroundBorderless =
    TouchableComponent.SelectableBackgroundBorderless;
  static Ripple = TouchableComponent.Ripple;
  static canUseNativeForeground = TouchableComponent.canUseNativeForeground;

  render() {
    let {
      children,
      style,
      foreground,
      background,
      useForeground,
      ...props
    } = this.props;

    children = React.Children.only(children);

    if (TouchableComponent === TouchableNativeFeedback) {
      useForeground =
        foreground && TouchableNativeFeedback.canUseNativeForeground();

      if (foreground && background) {
        console.warn(
          "Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground."
        );
      }

      return (
        <TouchableComponent
          {...props}
          useForeground={useForeground}
          background={(useForeground && foreground) || background}
        >
          <View style={style}>{children}</View>
        </TouchableComponent>
      );
    } else if (TouchableComponent === TouchableWithoutFeedback) {
      return (
        <TouchableWithoutFeedback {...props}>
          <View style={style}>{children}</View>
        </TouchableWithoutFeedback>
      );
    } else {
      let TouchableFallback = this.props.fallback || TouchableComponent;
      return (
        <TouchableFallback {...props} style={style}>
          {children}
        </TouchableFallback>
      );
    }
  }
}
