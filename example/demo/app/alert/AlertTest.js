/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-14 19:50:00 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-14 19:57:38
 */
import React from "react";
import { ScrollView, Blank, Item, View, Button, Alert } from "../../src";

export default class AlertTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <Blank />
        <Button
          title="点击弹出弹框2"
          onPress={() => {
            Alert.alert(
              "Alert Title",
              "My Alert Msg",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            );
          }}
        />
        <Blank />
        <Button
          title="点击弹出弹框3"
          onPress={() => {
            Alert.alert(
              "Alert Title",
              "My Alert Msg",
              [
                {
                  text: "Ask me later",
                  onPress: () => console.log("Ask me later pressed")
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            );
          }}
        />
      </ScrollView>
    );
  }
}
