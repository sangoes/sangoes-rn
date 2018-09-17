/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 13:06:04 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 14:24:08
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
          title="基本modal"
          onPress={() => {
            this.BaseModal.show();
          }}
        />
        <Blank />
        <Button
          title="蒙层modal"
          onPress={() => {
            this.OverLayModal.show();
          }}
        />
         <Blank />
        <Button
          title="透明Modal"
          onPress={() => {
            this.TransModal.show();
          }}
        />
        {/*基本modal  */}
        <Modal ref={o => (this.BaseModal = o)}>
          <Text>dafsafds</Text>
        </Modal>
        {/*蒙层modal  */}
        <Modal
          ref={o => (this.OverLayModal = o)}
          animationType="slide"
          type="overlay"
        >
          <Text>dafsafds</Text>
        </Modal>
         {/*透明Modal  */}
         <Modal
          ref={o => (this.TransModal = o)}
          animationType="slide"
          type="transparent"
        >
          <Text>dafsafds</Text>
        </Modal>
      </ScrollView>
    );
  }
}
