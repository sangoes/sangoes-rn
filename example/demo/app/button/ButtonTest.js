/*
 * @Author: jerrychir 
 * @Date: 2018-08-21 14:20:33 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-21 18:28:27
 */
import React from "react";
import { View, Icon, hp, wp } from "../../src";
import Button from "../../src/components/button";

export default class ButtonTest extends React.Component {
  render() {
    return (
      //
      <View>
        {/*primary  */}
        <Button type="primary" title="primary" style={{ marginTop: 10 }} />
        {/*primaryTap  */}
        <Button
          type="primaryTap"
          title="primaryTap radius"
          radius={5}
          style={{ marginTop: 10 }}
        />
        {/*success  */}
        <Button type="success" title="success" style={{ marginTop: 10 }} />
        {/*warning  */}
        <Button type="warning" title="warning" style={{ marginTop: 10 }} />
        {/*disabled  */}
        <Button title="disabled" disabled style={{ marginTop: 10 }} />
        {/*icon  */}
        <Button
          type="primary"
          title="ICON BUTTON"
          style={{ marginTop: 10 }}
          icon={{
              name:'format-list-bulleted',
            }}
        />
      </View>
    );
  }
}
