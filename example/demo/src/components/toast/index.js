/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-27 13:20:31 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-13 10:58:31
 */
import React from "react";
import topView from "rn-topview";
import ToastContainer from "./ToastContainer";

function notice(type, title, duration) {
  topView.remove();
  function animationEnd() {
    topView.remove();
  }
  topView.set(
    <ToastContainer
      type={type}
      title={title}
      duration={duration}
      onAnimationEnd={animationEnd}
    />
  );
}

export default {
  SHORT: 1500,
  LONG: 3000,
  CENTER: "center",
  TOP: "top",
  BOTTOM: "bottom",
  show(content, position, duration) {
    return notice(position, content, duration);
  }
};
