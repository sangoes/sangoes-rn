/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 12:33:04 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-14 22:56:44
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import View from "../view/index";
import Text from "../text";
import nodeTypes from "../propTypes/nodeTypes";
import Image from "../image";
import Touchable from "../touch/touchable";
import Icon from "../icon";
import { hp } from "sangoes-rn-tools";
import Switch from "../switch";

export default class Item extends Component {
  render() {
    const {
      type,
      style,
      image,
      title,
      subTitle,
      onPress,
      onLongPress,
      checkmark,
      rightTitle,
      rightSubTitle,
      switcher,
      onSwitchPress
    } = this.props;
    return (
      <Touchable onPress={onPress} onLongPress={onLongPress}>
        <View ref={c => (this._root = c)} style={[styles[type], style]}>
          {/* image */}
          {image && (
            <View style={styles.imageView}>
              <Image source={image.source} rounded={image.rounded} />
            </View>
          )}
          {/* title view */}
          <View style={styles.titleView}>
            {/* title */}
            {title && <Text>{title}</Text>}
            {/* sub title */}
            {subTitle && <Text type="text">{subTitle}</Text>}
          </View>
          {/* right view */}
          <View style={styles.rightItem}>
            <View style={styles.imageView}>
              {/*  rightSubTitle */}
              {rightSubTitle && (
                <Text type="text" style={styles.rightTitle}>
                  {rightSubTitle}
                </Text>
              )}
              {/* rightTitle */}
              {rightTitle && (
                <Text type="secondary" style={styles.rightTitle}>
                  {rightTitle}
                </Text>
              )}
            </View>
            {/* switch */}
            {switcher && (
              <Switch
                onSwitchChange={value => {
                  onSwitchPress(value);
                }}
              />
            )}
            {/* checkmark */}
            {checkmark && (
              <Icon
                style={{ marginTop: hp("0.3") }}
                type="MaterialCommunityIcons"
                name="chevron-right"
                size={hp("3")}
              />
            )}
          </View>
        </View>
      </Touchable>
    );
  }
}

Item.propTypes = {
  type: PropTypes.oneOf(["default", "section"]),
  icon: nodeTypes,
  image: nodeTypes,
  input: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  checkmark: nodeTypes,
  rightTitle: PropTypes.string,
  rightSubTitle: PropTypes.string,
  switcher: PropTypes.bool,
  onSwitchPress: PropTypes.func
};
Item.defaultProps = {
  title: "Item Title",
  type: "default"
};
