/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 18:55:46 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-21 15:34:08
 */
export {
  wp,
  hp,
  listenOrientationChange,
  removeOrientationListener,
  screenWidth,
  screenHeight
} from "./utils/dimension";
export { default as Storage } from "./utils/storage";

import Icon from "./components/icon";
import View from "./components/view";
import Text from "./components/text";
import { BounceTouch, RippleTouch, Touchable } from "./components/touch/touchable/index";

export { Icon, View, Text, Touchable, BounceTouch, RippleTouch };
