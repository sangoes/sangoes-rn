/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-09 10:41:35 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-14 19:26:40
 */
import { StyleSheet } from "react-native";
import variables from "../themes";

const hairlineWidth = StyleSheet.hairlineWidth;
const styles = StyleSheet.create({
  //
  ground: {
    flexDirection: "row",
    alignItems: "center",
    height: variables.item_height,
    backgroundColor: variables.item_white,
    padding: 5
  },
  input: {
    flex: 1,
    padding: 0,
    marginLeft: 5
  },
  inputErro: {
    color: variables.brand_error
  },
  inputIcon: {
    marginTop: 4
  }
});
export default styles;
