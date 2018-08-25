/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 20:03:08 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-25 19:24:01
 */
import React from "react";
import { ScrollView, Blank, Item, View, Badge, Image } from "../../src";

export default class BadgeTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <Blank />
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            flexDirection: "row"
          }}
        >
          <Badge />
          <Badge type="round" text="90000+" />
        </View>
        <Blank />
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            flexDirection: "row"
          }}
        >
          <Badge type="rectangle" text="减" />
          <Badge type="rectangle" text="惠" color="orange" />
          <Badge type="rectangle" text="反" color="orange" />
          <Badge type="rectangle" text="眷" color="orange" />
          <Badge type="rectangle" text="New" color="orange" />
          <Badge type="border" text="自动缴费" color="orange" />
        </View>
      </ScrollView>
    );
  }
}
