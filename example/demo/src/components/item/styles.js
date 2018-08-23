/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 12:43:01 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 09:50:53
 */
import { StyleSheet } from "react-native";
import variables from "../themes";
import { hp } from "sangoes-rn-tools";

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    height: variables.item_height,
    backgroundColor: variables.item_white,
    padding: 5
  },
  section: {
    flexDirection: "row",
    height: variables.item_section_height,
    backgroundColor: variables.item_section,
    paddingLeft: 5,
    paddingRight: 5
  },
  titleView: {
    alignSelf: "center",
    marginLeft: 5
  },
  rightItem: {
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    right: 5
  },
  imageView: {
    alignSelf: "center",
    marginRight: 5
  },
  rightTitle: {
    textAlign: "right"
  }
});

export default styles;
