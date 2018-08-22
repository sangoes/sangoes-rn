/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 12:51:19 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-22 14:41:07
 */
import React from "react";
import { ScrollView, Item, Text } from "../../src";

export default class ItemTest extends React.Component {
  render() {
    return (
      <ScrollView>
        <Item />
        {/* image item */}
        <Text> ITEM IMAGE</Text>
        <Item image />
        {/* icon item */}
        <Text>SUBTITLE ITEM</Text>
        <Item
          image={{
            rounded: true,
            source: {
              uri:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535510488&di=c424cbd5571b06d3cac47f87667d9412&imgtype=jpg&er=1&src=http%3A%2F%2F6.pic.pc6.com%2Fthumb%2Fup%2F2017-9%2F201791010184097766702_600_0.jpeg"
            }
          }}
          onPress={() => console.log("dsdfsfds")}
          title="subtitle"
          subTitle="sub title 2"
        />
        {/* checkmark item */}
        <Text>checkmark ITEM</Text>
        <Item
          image
          onPress={() => console.log("dsdfsfds")}
          title="subtitle"
          checkmark
        />
      </ScrollView>
    );
  }
}
