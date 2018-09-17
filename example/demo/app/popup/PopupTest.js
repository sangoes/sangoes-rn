/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 13:06:04 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 15:38:42
 */
import React from "react";
import {
  ScrollView,
  Blank,
  Text,
  Slider,
  Button,
  Alert,
  Popup
} from "../../src";

export default class PopupTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      baseVisible: false,
      overlayVisible: false,
      transVisible: false,
      fadeVisible: false
    };
  }
  render() {
    return (
      <ScrollView>
        <Blank />
        <Button
          title="基本modal"
          onPress={() => {
            this.setState({
              baseVisible: true
            });
          }}
        />
        <Blank />
        <Button
          title="蒙层modal"
          onPress={() => {
            this.setState({
              overlayVisible: true
            });
          }}
        />
        <Blank />
        <Button
          title="透明Modal"
          onPress={() => {
            this.setState({
              transVisible: true
            });
          }}
        />
        <Blank />
        <Button
          title="Fade Modal"
          onPress={() => {
            this.setState({
              fadeVisible: true
            });
          }}
        />
        {/*基本 Popup  */}
        <Popup
          visible={this.state.baseVisible}
          onCanclePress={() => {
            this.setState({
              baseVisible: false
            });
          }}
        >
          <Text>dafsafds</Text>
        </Popup>
        {/*蒙层 Popup */}
        <Popup
          visible={this.state.overlayVisible}
          animationType="slide"
          type="overlay"
          onCanclePress={() => {
            this.setState({
              overlayVisible: false
            });
          }}
        >
          <Text>dafsafds</Text>
        </Popup>
        {/*透明Modal  */}
        <Popup
          visible={this.state.transVisible}
          animationType="slide"
          type="transparent"
          onCanclePress={() => {
            this.setState({
              transVisible: false
            });
          }}
        >
          <Text>dafsafds</Text>
        </Popup>
        {/*Fade Modal  */}
        <Popup
          visible={this.state.fadeVisible}
          animationType="fade"
          type="overlay"
          onCanclePress={() => {
            this.setState({
              fadeVisible: false
            });
          }}
        >
          <Text>dafsafds</Text>
        </Popup>
      </ScrollView>
    );
  }
}
