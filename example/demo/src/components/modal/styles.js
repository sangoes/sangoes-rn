/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 09:14:43 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 20:03:45
 */
import { StyleSheet } from "react-native";
import variables from "../themes";
const hairlineWidth = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  alertView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: variables.modal_zindex
  },
  alertBg: {
    backgroundColor: variables.modal_alert_color,
    borderRadius: variables.radius_xlg,
    width: variables.modal_width,
    shadowColor: variables.overlay_color,
    shadowOffset: { h: 20, w: 20 },
    shadowRadius: variables.radius_xlg,
    shadowOpacity: 0.8
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    margin: variables.margin_sm,
    marginTop: variables.margin_xd
  },
  subTitle: {
    alignSelf: "center",
    marginLeft: variables.margin_sm,
    marginRight: variables.margin_sm,
    marginBottom: variables.margin_xd
  },
  button: {
    backgroundColor: variables.modal_alert_color,
    height: 49,
  },
  twoButton: {
    backgroundColor: variables.modal_alert_color,
    height: 49,
    width: 134,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  buttonTitle: {
    color: "#007AFF",
    fontSize: variables.font_size_caption
  },
  buttonsStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default styles;
