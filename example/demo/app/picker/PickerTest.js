/*
 * @Author: jerrychir 
 * @Date: 2018-09-14 21:55:12 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-14 22:01:49
 */
import React from "react";
import { ScrollView, Blank, Item, View, Button, Alert } from "../../src";
import { Picker } from "react-native";

export default class PickerTest extends React.Component {
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
        <Button title="点击弹出弹框2" onPress={() => {}} />
        <Blank />
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="oc" value="oc" />
        </Picker>
      </ScrollView>
    );
  }
}
