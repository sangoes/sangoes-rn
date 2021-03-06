/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 09:04:42 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 17:57:08
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
