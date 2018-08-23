/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 19:35:52 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 21:52:14
 */
import { StyleSheet } from "react-native";
import variables from "../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dotBadge: {
    backgroundColor: variables.badge_red,
    width: variables.badge_dot_sm,
    height: variables.badge_dot_sm,
    borderRadius: variables.badge_dot_radius
  },
  textBadge: {
    backgroundColor: variables.badge_red,
    borderRadius: variables.badge_radius_md,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    paddingBottom: 3
  },
  text: {
    color: variables.color_text_base_inverse,
    fontSize: variables.font_size_caption_sm
  }
});

export default styles;
