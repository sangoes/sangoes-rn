/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-15 13:06:04 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-17 15:40:10
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

        {/*基本modal  */}
        <Modal ref={o => (this.BaseModal = o)}>
          <Text>dafsafds</Text>
        </Modal>
      </ScrollView>
    );
  }
}
