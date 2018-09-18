/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 13:06:04 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 20:04:54
 */
import React from "react";
import {
  ScrollView,
  Blank,
  Text,
  Slider,
  Button,
  Alert,
  Modal
} from "../../src";

export default class ModalTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  render() {
    return (
      <ScrollView>
        <Blank />
        <Button
          title="默认弹窗Alert"
          onPress={() => {
            this.BaseModal.show();
          }}
        />
        <Blank />
        <Button
          title="带2个按钮弹窗Alert"
          onPress={() => {
            this.TwoBaseModal.show();
          }}
        />
        <Blank />
        <Button
          title="带3个按钮弹窗Alert"
          onPress={() => {
            this.ThreeBaseModal.show();
          }}
        />

        {/* 只有一个按钮 */}
        <Modal
          type="alert"
          ref={o => (this.BaseModal = o)}
          title="我是弹窗XX"
          subTitle="我副文本XXXXX"
          cancleTitle="取消"
          onCanclePress={() => {
            console.log("dsafdsafs");
          }}
        />
        {/* 只有一个按钮 */}
        <Modal
          type="alert"
          ref={o => (this.TwoBaseModal = o)}
          title="我是弹窗XX"
          subTitle="我副文本XXXXX"
          buttons={[
            {
              text: "取消",
              onPress: () => console.log("取消")
            },
            {
              text: "确定",
              onPress: () => console.log("确定")
            }
            // { text: "OK", onPress: () => console.log("OK Pressed") }
          ]}
        />
        {/* 只有一个按钮 */}
        <Modal
          type="alert"
          ref={o => (this.ThreeBaseModal = o)}
          title="我是弹窗XX"
          subTitle="我副文本XXXXX"
          buttons={[
            { text: "是否清楚", onPress: () => console.log("OK Pressed") },
            {
              text: "确定",
              onPress: () => console.log("确定")
            },

            {
              text: "取消",
              style: "",
              onPress: () => console.log("取消")
            }
          ]}
        />
      </ScrollView>
    );
  }
}
