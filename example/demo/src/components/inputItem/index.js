/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-14 14:40:13 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-14 19:30:30
 */
import React, { Component } from "react";
import styles from "./styles";
import View from "../view/index";
import TextInput from "../textInput";
import PropTypes from "prop-types";
import styleTypes from "../propTypes/styleTypes";
import Text from "../text";
import Icon from "../icon";
import Image from "../image";
import variables from "../themes";
import { hp } from "sangoes-rn-tools";

/**
 * InputItem
 */
export default class InputItem extends Component {
  //当输入框变化时调用
  _onChange(text) {
    const { onChange, type } = this.props;
    // const maxLength = this.props.maxLength;
    // switch (type) {
    //   //银行卡
    //   case "bankCard":
    //     text = text.replace(/\D/g, "");
    //     if (maxLength > 0) {
    //       text = text.substring(0, maxLength);
    //     }
    //     text = text.replace(/\D/g, "").replace(/(....)(?=.)/g, "$1 ");
    //     break;
    //   //电话
    //   case "phone":
    //     text = text.replace(/\D/g, "").substring(0, 11);
    //     const valueLen = text.length;
    //     if (valueLen > 3 && valueLen < 8) {
    //       text = `${text.substr(0, 3)} ${text.substr(3)}`;
    //     } else if (valueLen >= 8) {
    //       text = `${text.substr(0, 3)} ${text.substr(3, 4)} ${text.substr(7)}`;
    //     }
    //     break;
    //   case "password":
    //     break;
    //   default:
    //     break;
    // }
    if (onChange) {
      onChange(text);
    }
  }
  render() {
    const {
      type,
      inputStyle,
      placeholder,
      placeholderTextColor,
      title,
      image,
      icon,
      iconColor,
      keyboardType,
      error
    } = this.props;
    //键盘类型 keyboardType
    let keyboardTypeValue;
    switch (type) {
      case "phone":
        keyboardTypeValue = "phone-pad";
        break;
      case "number":
        keyboardTypeValue = "numeric";
        break;
      default:
        keyboardTypeValue = keyboardType || "default";
        break;
    }
    return (
      <View style={[styles.ground]}>
        {/* title */}
        {title && <Text>{title}</Text>}
        {/* image */}
        {image && <Image source={image} />}
        {/* icon */}
        {icon && (
          <Icon style={styles.inputIcon} name={icon} color={iconColor} />
        )}
        {/* text input */}
        <TextInput
          style={[styles.input, inputStyle, error && styles.inputErro]}
          placeholder={placeholder}
          keyboardType={keyboardTypeValue}
          secureTextEntry={type === "password"}
          {...this.props}
        />
        {/* error icon */}
        {error && (
          <Icon
            style={styles.inputIcon}
            name="alert-circle-outline"
            color={variables.brand_error}
          />
        )}
      </View>
    );
  }
}
InputItem.propTypes = {
  ...TextInput.propTypes,
  type: PropTypes.oneOf([
    "default",
    "text",
    "bankCard",
    "phone",
    "password",
    "number",
    "digit"
  ]),
  inputStyle: styleTypes, //TextInput style
  placeholder: PropTypes.string, //placeholder
  title: PropTypes.string, //标题 title
  image: PropTypes.object, //右边图标图片
  icon: PropTypes.string, //图标
  iconColor: PropTypes.string, //图标颜色
  error: PropTypes.bool //错误 边框和文章变红
};
InputItem.defaultProps = {
  type: "default"
};
