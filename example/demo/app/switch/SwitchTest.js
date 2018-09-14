/*
 * @Author: jerrychir 
 * @Date: 2018-09-14 22:05:17 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-14 23:11:36
 */
import React from "react";
import { ScrollView, Blank, Item, View, Button, Switch } from "../../src";

export default class SwitchTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "java"
    };
  }
  render() {
    return (
      <ScrollView>
        <Blank />
        <Switch />
        <Blank />
        <Switch trunOn />
        <Blank />
        <Switch trunOn disabled />
        <Blank />
        <Switch trunOn onTintColor="#df4555"/>
        <Blank />
        <Switch trunOn onTintColor="#df4555" thumbTintColor="#234678"/>
        <Blank />
        <Switch onTintColor="#df4555" thumbTintColor="#234678" tintColor="#2222"/>
      </ScrollView>
    );
  }
}
