/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 09:04:42 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 10:51:34
 */
import { StyleSheet } from "react-native";
import variables from "../themes";

const hairlineWidth = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  horizontal: {
    backgroundColor:
      hairlineWidth < 1
        ? variables.divider_color
        : variables.divider_color_dark,
    height: hairlineWidth
  },
  vertical: {
    backgroundColor:
      hairlineWidth < 1
        ? variables.divider_color
        : variables.divider_color_dark,
    width: hairlineWidth
  }
});

export default styles;
