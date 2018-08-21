/*
 * @Author: jerrychir 
 * @Date: 2018-08-20 10:09:27 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-21 18:17:30
 */
import { StyleSheet } from "react-native";
import variables from "../themes";
import { hp, wp } from "../../utils/dimension";

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: hp("1.2"),
    marginLeft: wp("2"),
    marginRight: wp("2")
  },
  primary: {
    backgroundColor: variables.brand_primary
  },
  primaryTap: {
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
  btnIcon: {
    alignItems: "center",
    marginRight: wp("2")
  }
});

export default styles;
