/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-22 09:14:57 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-22 22:18:55
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Image as RNImage } from "react-native";
import Touchable from "../touch/touchable/index";
import View from "../view/index";
import Icon from "../icon";

/**
 * Image
 */
export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoadFinshed: false
    };
  }
  render() {
    const {
      type,
      style,
      source,
      iconName,
      iconSize,
      rounded,
      onPress,
      onLongPress
    } = this.props;
    const { onLoadFinshed } = this.state;
    //borderRadius
    const borderRadius = styles[type].width / 2;
    return (
      <Touchable onPress={onPress} onLongPress={onLongPress}>
        {source ? (
          <RNImage
            ref={c => (this._root = c)}
            {...this.props}
            style={[
              styles[type],
              rounded && { borderRadius: borderRadius },
              style
            ]}
            onLoad={() => {}}
          >
            {this.props.children}
          </RNImage>
        ) : (
          <View
            style={[
              styles.overlay,
              styles[type],
              rounded && { borderRadius: borderRadius },
              style
            ]}
          >
            <Icon
              type="MaterialCommunityIcons"
              name={iconName}
              size={iconSize}
            />
          </View>
        )}
      </Touchable>
    );
  }
}

Image.propTypes = {
  type: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  rounded: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
};
Image.defaultProps = {
  type: "small",
  iconName: "image-filter-hdr",
  iconSize: 12
};
