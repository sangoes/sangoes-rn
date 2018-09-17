/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 09:14:43 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 14:44:50
 */
import { StyleSheet } from "react-native";
import variables from "../themes";
const hairlineWidth = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  // overlay 蒙层
  overlay: {
    flex: 1,
    backgroundColor: variables.overlay_color,
  },
  // transparent 透明
  transparent: {}
});

export default styles;
