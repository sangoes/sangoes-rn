/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-19 22:32:21 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-17 22:35:25
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
          title="Basic ActionSheet"
          onPress={() => {
            ActionSheet.button([
              { text: "Sure", onPress: () => console.log("确定") },
              { text: "Cancle", onPress: () => ActionSheet.hide() }
            ]);
          }}
        />
        <Blank />
        <Button
          title="Title ActionSheet"
          onPress={() => {
            ActionSheet.title("This is title", [
              { text: "Sure", onPress: () => console.log("确定") },
              { text: "Cancle", onPress: () => ActionSheet.hide() }
            ]);
          }}
        />
      </ScrollView>
    );
  }
}
