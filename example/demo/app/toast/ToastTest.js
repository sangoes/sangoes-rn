/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 15:50:17 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-13 11:01:45
 */
import React from "react";
import { View, Button, ScrollView, Text, Toast } from "../../src";

export default class ToastTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>DEFAULT TOAST </Text>
        <Button
          title="DEFAULT TOAST"
          onPress={() => {
            Toast.show("TOAST DEFALUT!", Toast.CENTER, Toast.SHORT);
          }}
        />
        <Text>TOP TOAST </Text>
        <Button
          title="TOP TOAST"
          onPress={() => {
            Toast.show("TOP TOAST!", Toast.TOP, Toast.SHORT);
          }}
        />
        <Text>BOTTOM TOAST </Text>
        <Button
          title="BOTTOM TOAST"
          onPress={() => {
            Toast.show("BOTTOM TOAST!", Toast.BOTTOM, Toast.SHORT);
          }}
        />
        <Text>LONG TOAST </Text>
        <Button
          title="LONG TOAST"
          onPress={() => {
            Toast.show("LONG TOAST!", Toast.CENTER, Toast.LONG);
          }}
        />
      </ScrollView>
    );
  }
}
