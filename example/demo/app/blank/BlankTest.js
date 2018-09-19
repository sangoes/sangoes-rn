/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 10:12:56 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-19 17:43:01
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
        <Blank type="wing">
          <View
            type="horizontal"
            style={{ backgroundColor: "red", height: 44 }}
          />
        </Blank>
        <Blank />
        <View type="horizontal">
          <Blank type="hwing" />
          <View
            type="horizontal"
            style={{ backgroundColor: "red",width:100, height: 44 }}
          />
        </View>
      </ScrollView>
    );
  }
}
