/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 09:20:21 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-22 13:11:09
 */
import { StyleSheet } from "react-native";
import variables from "../themes";
import { wp } from "sangoes-rn-tools";

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center"
  },
  small: {
    width: wp("7"),
    height: wp("7"),
    borderRadius: 0
  },
  medium: {
    width: wp("12"),
    height: wp("12"),
    borderRadius: 0
  },
  large: {
    width: wp("18"),
    height: wp("18"),
    borderRadius: 0
  },
  xlarge: {
    width: wp("36"),
    height: wp("36"),
    borderRadius: 0
  }
});

export default styles;
