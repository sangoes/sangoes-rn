/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-19 18:14:44 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-19 22:02:05
 */
import { StyleSheet } from "react-native";
import variables from "../themes";
import { screenWidth } from "sangoes-rn-tools";

const styles = StyleSheet.create({
  actionSheetView: {
    position: "absolute",
    backgroundColor: "white",
    width: screenWidth,
    bottom: 0
  },
  actionButton: {
    height: 49,
    alignItems: "center"
  },
  actionBlank: {
    backgroundColor: "white",
    opacity: 0.8
  }
});
export default styles;
