/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-21 14:20:33 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-18 12:03:34
 */
import React from "react";
import { View, Button, TextButton } from "../../src";

export default class ButtonTest extends React.Component {
  render() {
    return (
      //
      <View>
        {/*primary  */}
        <Button
          type="primary"
          title="primary"
          style={{ marginTop: 10 }}
          onPress={() => {}}
        />
        {/*primaryTap  */}
        {/* <Button
          type="primaryTap"
          title="primaryTap radius"
          radius={5}
          style={{ marginTop: 10 }}
        /> */}
        {/*success  */}
        <Button
          type="success"
          title="success"
          style={{ marginTop: 10 }}
          onPress={() => {}}
        />
        {/*warning  */}
        <Button
          type="warning"
          title="warning"
          style={{ marginTop: 10 }}
          onPress={() => {}}
        />
        {/*disabled  */}
        <Button
          title="disabled"
          disabled
          style={{ marginTop: 10 }}
          onPress={() => {}}
        />
        {/*icon  */}
        <Button
          type="primary"
          title="ICON BUTTON"
          style={{ marginTop: 10 }}
          icon={{
            name: "format-list-bulleted"
          }}
          onPress={() => {}}
        />
        {/*large button  */}
        <Button
          type="primary"
          title="ActivityIndicator BUTTON"
          loading
          style={{ marginTop: 10 }}
          onPress={() => {}}
        />
        {/*large button  */}
        <TextButton title="Text Button" style={{ marginTop: 10 }} />
      </View>
    );
  }
}
