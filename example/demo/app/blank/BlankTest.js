/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 10:12:56 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 10:23:37
 */
import React from "react";
import { ScrollView, Blank, Item, View } from "../../src";

export default class BlankTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <Blank />
        <Item />
        <Blank />
        <View type="horizontal">
          <Blank type="vertical" />
          <View
            type="horizontal"
            style={{ backgroundColor: "red", width: 200, height: 44 }}
          />
        </View>
      </ScrollView>
    );
  }
}
