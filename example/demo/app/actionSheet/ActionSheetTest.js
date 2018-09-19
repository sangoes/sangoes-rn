/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-19 22:32:21 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-19 22:38:05
 */
import React from "react";
import { ScrollView, Blank, Button, ActionSheet } from "../../src";

export default class ActionSheetTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  render() {
    return (
      <ScrollView>
        <Blank />
        <Button
          title="mActionSheet"
          onPress={() => {
            this.mSheetModal.show();
          }}
        />
        <Blank />
        <Button
          title="More ActionSheet"
          onPress={() => {
            this.moreSheetModal.show();
          }}
        />
        <ActionSheet
          ref={o => (this.mSheetModal = o)}
          buttons={[
            {
              text: "确定",
              onPress: () => console.log("确定")
            },
            {
              text: "取消",
              onPress: () => this.mSheetModal.hide()
            }
          ]}
        />
        <ActionSheet
          ref={o => (this.moreSheetModal = o)}
          buttons={[
            {
              text: "关闭",
              onPress: () => console.log("关闭")
            },
            {
              text: "投诉",
              onPress: () => console.log("投诉")
            },
            {
              text: "确定",
              onPress: () => console.log("确定")
            },
            {
              text: "取消",
              onPress: () => this.moreSheetModal.hide()
            }
          ]}
        />
      </ScrollView>
    );
  }
}
