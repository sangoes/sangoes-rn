/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 09:14:43 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 11:09:10
 */
import { StyleSheet } from "react-native";
import variables from "../../themes";

const hairlineWidth = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    width: 100
  },
  root: {
    paddingTop: 100,
    flexDirection: "row",
    justifyContent: "center"
  },
  content: {
    padding: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  btnStyle: {
    color: variables.brand_wait
  },
  multiPicker: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default styles;
