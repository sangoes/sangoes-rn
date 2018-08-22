/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 12:43:01 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-22 14:45:23
 */
import { StyleSheet } from "react-native";
import variables from "../themes";

const styles = StyleSheet.create({
  default: {
    backgroundColor: variables.item_white,
    padding: 5
  },
  titleView: {
    alignSelf: "center",
    marginLeft: 5
  },
  rightIcon: {
    alignSelf: "center",
    position: "absolute",
    right: 1
  }
});

export default styles;
