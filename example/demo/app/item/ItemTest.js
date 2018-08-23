/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 12:51:19 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 09:48:37
 */
import React from "react";
import { ScrollView, Item, Text } from "../../src";
import { hp } from "sangoes-rn-tools";

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
        {/* image item */}
        <Text> ITEM Large IMAGE</Text>
        <Item image style={{ height: hp("10") }} checkmark />
        {/* ITEM RIGHT TITLE */}
        <Text> ITEM RIGHT TITLE</Text>
        <Item image rightTitle="right title" />
        {/* ITEM RIGHT SUBTITLE */}
        <Text> ITEM RIGHT SUBTITLE</Text>
        <Item
          image
          rightTitle="right title"
          rightSubTitle="10:35 PM"
          checkmark
        />
        {/* ITEM SECTION*/}
        <Text> ITEM RIGHT SUBTITLE</Text>
        <Item type="section" />
      </ScrollView>
    );
  }
}
