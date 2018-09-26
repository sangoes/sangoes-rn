/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-20 10:09:27 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-18 23:06:43
 */
import { StyleSheet } from "react-native";
import variables from "../themes";
import { hp, wp } from "sangoes-rn-tools";

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height:48
  },
  primary: {
    backgroundColor: variables.brand_primary
  },
  primaryHighlight: {
    backgroundColor: variables.brand_primary_tap
  },
  success: {
    backgroundColor: variables.brand_success
  },
  warning: {
    backgroundColor: variables.brand_warning
  },
  disabled: {
    backgroundColor: variables.brand_disabled
  },
  transparent: {
    backgroundColor: "transparent"
  },
  btnItem: {
    alignItems: "center"
  },
  btnIcon: {
    marginRight: wp("2")
  },
  textWhite: {
    color: variables.color_text_base_inverse
  },
  indicator: {
    marginRight: wp("2")
  }
});

export default styles;
