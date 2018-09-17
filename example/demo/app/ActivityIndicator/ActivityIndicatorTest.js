/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-23 13:13:24 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-23 14:26:49
 */
import React from "react";
import {
  ScrollView,
  Blank,
  Item,
  View,
  Text,
  Button,
  ActivityIndicator
} from "../../src";

export default class ActivityIndicatorTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <Blank />
        <Text>DEFALUT</Text>
        <ActivityIndicator />
        <Text>DEFALUT RED</Text>
        <ActivityIndicator color="red" />
        <Text>DEFALUT RED LARGE</Text>
        <ActivityIndicator color="red" size="large" />
        <Text>DEFALUT</Text>
        <ActivityIndicator title="Loading" />
      </ScrollView>
    );
  }
}
