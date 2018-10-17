/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-14 21:55:12 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-13 14:23:39
 */
import React from "react";
import {
  ScrollView,
  Blank,
  Text,
  View,
  Button,
  Alert,
  Picker
} from "../../src";
import {Share} from "react-native"

export default class PickerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "java",
      value: ["1", "11"],
      visible: false
    };
  }
  onChange = value => {
    console.log("onChange", value);
    this.setState({
      value
    });
  };
  render() {
    return (
      <ScrollView>
        <Blank />
        <Button
          title="picker基本"
          onPress={() => {
            this.BasePicker.show();
            // Share.share({message:"xxx",title:"qqqq"},{}).then(()=>{

            // })
          }}
        />
        <Blank />
        {/* 基本Picker */}
        <Picker ref={o => (this.BasePicker = o)} />

        
      </ScrollView>
    );
  }
}
