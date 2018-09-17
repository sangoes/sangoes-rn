/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 15:50:17 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-23 19:16:10
 */
import React from "react";
import { View, Button, ScrollView, Text, Toast } from "../../src";

export default class ToastTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>TOAST DEFALUT</Text>
        <Button
          title="TOAST DEFALUT"
          onPress={() => {
            this.Toast.showToast("center", "TOAST DEFALUT!");
          }}
        />
        <Text>TOAST DEFALUT DURTION</Text>
        <Button
          title="TOAST DEFALUT DURTION"
          onPress={() => {
            this.Toast.showToast("center", "TOAST DEFALUT DURTION!", 3000);
          }}
        />
        <Text>TOP TOAST DEFALUT</Text>
        <Button
          title="TOP TOAST DEFALUT"
          onPress={() => {
            this.Toast.showToast("top", "TOAST DEFALUT!");
          }}
        />
        <Text>BOTTOM TOAST DEFALUT</Text>
        <Button
          title="BOTTOM TOAST DEFALUT"
          onPress={() => {
            this.Toast.showToast("bottom", "TOAST DEFALUT!");
          }}
        />
        <Text>LOADING TOAST</Text>
        <Button
          title="LOADING TOASTT"
          onPress={() => {
            this.Toast.showLoading();
            this.timer = setTimeout(() => {
              this.Toast.hideToastLoading();
            }, 1500);
          }}
        />
        <Text>LOADING TOAST NAME</Text>
        <Button
          title="LOADING TOASTT NAME"
          onPress={() => {
            this.Toast.showLoading("Loading...");
            this.timer = setTimeout(() => {
              this.Toast.hideToastLoading();
            }, 1500);
          }}
        />
        {/* toast */}
        <Toast
          ref={o => (this.Toast = o)}
          onClose={() => {
            console.log("close toast");
            this.timer && clearTimeout(this.timer);
          }}
        />
      </ScrollView>
    );
  }
}
