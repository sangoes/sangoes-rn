/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 12:33:04 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-22 15:01:07
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
      checkmark
    } = this.props;
    return (
      <Touchable
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View
          type="horizontal"
          ref={c => (this._root = c)}
          {...this.props}
          style={[styles.default, style]}
        >
          {/* {this.props.children} */}
          {/* avatar */}
          {image && <Image source={image.source} rounded={image.rounded} />}
          {/* title view */}
          <View style={styles.titleView}>
            {/* title */}
            {title && <Text>{title}</Text>}
            {/* sub title */}
            {subTitle && <Text type="text">{subTitle}</Text>}
          </View>
          {/* right view */}
          <View />
          {/* checkmark */}
          {checkmark && (
            <Icon
              style={styles.rightIcon}
              type="MaterialCommunityIcons"
              name="chevron-right"
              size={hp("3")}
            />
          )}
        </View>
      </Touchable>
    );
  }
}

Item.propTypes = {
  icon: nodeTypes,
  image: nodeTypes,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  checkmark: nodeTypes
};
Item.defaultProps = {
  title: "Item Title"
};
