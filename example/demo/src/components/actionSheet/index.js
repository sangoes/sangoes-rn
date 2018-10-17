/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-19 18:10:29 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-17 22:17:33
 * ActionSheet 动作模板
 */
import React, { Component } from "react";
import topView from "rn-topview";
import ActionSheetContainer from "./ActionSheetContainer";

let instance;

const onAnimationEnd = visible => {
  if (!visible) {
    topView.remove();
  }
};

export default {
  button(buttons) {
    topView.set(
      <ActionSheetContainer
        ref={ref => (instance = ref)}
        visible
        onAnimationEnd={onAnimationEnd}
        buttons={buttons}
      />
    );
  },
  title(title, buttons) {
    topView.set(
      <ActionSheetContainer
        ref={ref => (instance = ref)}
        visible
        title={title}
        onAnimationEnd={onAnimationEnd}
        buttons={buttons}
      />
    );
  },
  hide() {
    instance.hide();
  }
};
