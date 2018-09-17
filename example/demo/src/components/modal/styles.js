/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 09:14:43 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 17:48:01
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
    marginTop: variables.margin_ld
  },
  subTitle: {
    alignSelf: "center",
    marginLeft: variables.margin_sm,
    marginRight: variables.margin_sm,
    marginBottom: variables.margin_xd
  },
  button: {
    backgroundColor: variables.modal_alert_color
  },
  buttonTitle: {
    color: "#007AFF",
    fontSize: 20
  },
  buttonsStyle:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default styles;
