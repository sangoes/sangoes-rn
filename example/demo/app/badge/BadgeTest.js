/*
 * @Author: jerrychir 
 * @Date: 2018-08-23 20:03:08 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 21:40:24
 */
import React from "react";
import { ScrollView, Blank, Item, View, Badge, Image } from "../../src";

export default class BadgeTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <Badge />
        <Badge type="text" text="90000+" />
        <Badge type="text" text="New" />
      </ScrollView>
    );
  }
}
