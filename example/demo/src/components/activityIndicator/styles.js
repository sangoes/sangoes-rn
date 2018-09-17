/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 13:39:59 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-23 14:22:59
 */
import { StyleSheet } from "react-native";
import variables from "../themes";

const styles = StyleSheet.create({
  spinner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: variables.color_text_base,
    fontSize: variables.font_size_base,
    marginLeft: variables.h_spacing_md
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "transparent",
    zIndex: variables.toast_zindex
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 89,
    height: 89,
    borderRadius: variables.radius_md,
    backgroundColor: variables.toast_color
  },
  toast: {
    color: variables.color_text_base_inverse,
    fontSize: variables.font_size_base,
    marginTop: variables.v_spacing_sm
  }
});

export default styles;
