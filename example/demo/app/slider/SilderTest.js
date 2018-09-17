/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 08:49:49 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-15 08:59:00
 */
import React from "react";
import { ScrollView, Blank, Text, Slider, Button, Alert } from "../../src";

/**
 * silder
 * View props… ：View的所有属性 
disabled：是否禁用 为true时不可滑动 
onSlidingComplete：用户结束滑动的时候调用此回调，参数：value 
onValueChange ：在用户拖动滑块的过程中不断调用此回调，参数：value 
value：滑块的初始值。这个值应该在最小值和最大值之间。默认值是0 
step：滑块变化的最小值 
minimumValue：滑块的最小值 
maximumValue：滑块的最大值
 */
export default class SilderTest extends React.Component {
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
        <Slider />
        <Slider disabled={true} />
        <Slider maximumTrackTintColor="black" />
        <Slider minimumTrackTintColor="red" />
        <Slider style={{ borderWidth: 1, borderColor: "red" }} />
        <Text>{this.state.value}</Text>
        <Slider
          minimumValue={5}
          maximumValue={20}
          onValueChange={value => {
            this.setState({ value: value });
          }}
          onSlidingComplete={value => {
            this.setState({ value: value });
          }}
        />
        <Slider step={0.2} />
        {/* <Slider thumbImage={require('../../imgs/slider_thumb.png')}/> */}
        <Slider value={0.5} />
      </ScrollView>
    );
  }
}
