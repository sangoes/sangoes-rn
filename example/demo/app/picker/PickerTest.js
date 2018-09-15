/*
 * @Author: jerrychir 
 * @Date: 2018-09-14 21:55:12 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-15 14:10:05
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
// import { Picker } from "react-native";
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
            this.Picker.show();
          }}
        />
        <Blank />
        {/* <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="oc" value="oc" />
        </Picker>
        <Blank />
        <MultiPicker
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 10
          }}
          selectedValue={this.state.value}
          onValueChange={this.onChange}
        >
          <Picker style={{ flex: 1 }}>
            <Picker.Item value="1">one</Picker.Item>
            <Picker.Item value="2">two</Picker.Item>
            <Picker.Item value="3">three</Picker.Item>
            <Picker.Item value="4">four</Picker.Item>
            <Picker.Item value="5">five</Picker.Item>
            <Picker.Item value="6">six</Picker.Item>
            <Picker.Item value="7">seven</Picker.Item>
            <Picker.Item value="8">eight</Picker.Item>
          </Picker>
          <Picker style={{ flex: 1 }}>
            <Picker.Item value="11">eleven</Picker.Item>
            <Picker.Item value="12">twelve</Picker.Item>
            <Picker.Item value="13">thirteen</Picker.Item>
            <Picker.Item value="14">fourteen</Picker.Item>
            <Picker.Item value="15">fifteen</Picker.Item>
            <Picker.Item value="16">sixteen</Picker.Item>
            <Picker.Item value="17">seventeen</Picker.Item>
            <Picker.Item value="18">eighteen</Picker.Item>
          </Picker>
        </MultiPicker>
        <TouchableHighlight
          activeOpacity={0.5}
          style={[styles.button]}
          underlayColor="#a9d9d4"
          onPress={() => {
            this.setState({
              visible: true
            });
          }}
        >
          <Text>show popup</Text>
        </TouchableHighlight>
        <View style={{ height: 200 }} />
        <Popup
          ref={c => (this.Popup = c)}
          visible={this.state.visible}
          styles={PopupStyles}
          style={styles.root}
          title={"title"}
          content={popupContent}
        />

        <View style={{ height: 800 }} /> */}

        <Picker ref={o => (this.Picker = o)} />
      </ScrollView>
    );
  }
}

