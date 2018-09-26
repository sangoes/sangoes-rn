/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 19:35:52 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-25 19:15:53
 */
import { StyleSheet } from "react-native";
import variables from "../themes";

const hairlineWidth = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dotBadge: {
    width: variables.badge_dot_sm,
    height: variables.badge_dot_sm,
    borderRadius: variables.badge_dot_radius
  },
  roundBadge: {
    borderRadius: variables.badge_radius_md,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    paddingBottom: 3
  },
  rectangleBadge: {
    borderRadius: variables.badge_radius_sm,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    paddingBottom: 3
  },
  borderBadge: {
    borderRadius: variables.badge_radius_sm,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: hairlineWidth
  },
  text: {
    color: variables.color_text_base_inverse,
    fontSize: variables.font_size_caption_sm
  }
});

export default styles;
