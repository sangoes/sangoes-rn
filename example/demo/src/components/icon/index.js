/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-18 09:50:22 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-14 19:32:19
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default class Icon extends Component {
  setIcon(iconType) {
    switch (iconType) {
      case "Entypo":
        this.Icon = Entypo;
        break;
      case "EvilIcons":
        this.Icon = EvilIcons;
        break;
      case "Feather":
        this.Icon = Feather;
        break;
      case "FontAwesome":
        this.Icon = FontAwesome;
        break;
      case "Foundation":
        this.Icon = Foundation;
        break;
      case "Ionicons":
        this.Icon = Ionicons;
        break;
      case "MaterialCommunityIcons":
        this.Icon = MaterialCommunityIcons;
        break;
      case "MaterialIcons":
        this.Icon = MaterialIcons;
        break;
      case "Octicons":
        this.Icon = Octicons;
        break;
      case "SimpleLineIcons":
        this.Icon = SimpleLineIcons;
        break;
      case "Zocial":
        this.Icon = Zocial;
        break;
      default:
        this.Icon = Ionicons;
    }
  }

  componentWillMount() {
    this.setIcon(this.props.type);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.type && this.props.type != nextProps.type) {
      this.setIcon(nextProps.type);
    }
  }

  render() {
    return <this.Icon ref={c => (this._root = c)} {...this.props} />;
  }
}

Icon.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  type: PropTypes.oneOf([
    "Entypo",
    "EvilIcons",
    "Feather",
    "FontAwesome",
    "Foundation",
    "Ionicons",
    "MaterialCommunityIcons",
    "MaterialIcons",
    "Octicons",
    "SimpleLineIcons",
    "Zocial"
  ])
};
Icon.defaultProps = {
  type: "MaterialCommunityIcons", //类型
  size: 20 //默认大小
};
