/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 15:50:17 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-10-13 12:04:38
 */
import React from "react";
import { View, Button, ScrollView, Text, Toast } from "../../src";

export default class ToastTest extends React.Component {
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <ScrollView>
        <Text>DEFAULT TOAST </Text>
        <Button
          title="DEFAULT TOAST"
          onPress={() => {
            Toast.show(Toast.CENTER, "TOAST DEFALUT!", Toast.SHORT);
          }}
        />
        <Text>TOP TOAST </Text>
        <Button
          title="TOP TOAST"
          onPress={() => {
            Toast.show(Toast.TOP, "TOP TOAST!", Toast.SHORT);
          }}
        />
        <Text>BOTTOM TOAST </Text>
        <Button
          title="BOTTOM TOAST"
          onPress={() => {
            Toast.show(Toast.BOTTOM, "BOTTOM TOAST!", Toast.SHORT);
          }}
        />
        <Text>LONG TOAST </Text>
        <Button
          title="LONG TOAST"
          onPress={() => {
            Toast.show(Toast.CENTER, "LONG TOAST!", Toast.LONG);
          }}
        />
        <Text>LOADING DEFAULT TOAST </Text>
        <Button
          title="LOADING DEFAULT TOAST"
          onPress={() => {
            Toast.show(Toast.LOADING);
            this.timer = setTimeout(() => {
              Toast.hide();
            }, 3000);
          }}
        />
        <Text>LOADING TOAST </Text>
        <Button
          title="LOADING TOAST"
          onPress={() => {
            Toast.show(Toast.LOADING, "Loading..");
            this.timer = setTimeout(() => {
              Toast.hide();
            }, 3000);
          }}
        />
      </ScrollView>
    );
  }
}
