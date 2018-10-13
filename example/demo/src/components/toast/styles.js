/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 16:49:52 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-13 11:49:59
 */
import { StyleSheet } from "react-native";
import variables from "../themes";
import { wp } from "sangoes-rn-tools";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  toastView: {
    backgroundColor: variables.toast_color,
    padding: variables.margin_md,
    borderRadius: variables.radius_md,
    maxWidth: variables.toast_maxWidth
  },
  toastText: {
    color: variables.color_text_base_inverse
  },
  centerContainer: {
    justifyContent: "center"
  },
  topContainer: {
    position: "absolute",
    alignSelf: "center",
    top: variables.toast_margin_top
  },
  bottomContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: variables.toast_margin_top
  },
  loadingContainer: {
    justifyContent: "center"
  },
});

export default styles;
