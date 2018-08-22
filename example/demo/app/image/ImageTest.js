/*
 * @Author: jerrychir 
 * @Date: 2018-08-22 09:17:48 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-22 13:30:12
 */
import React from "react";
import { View, Text, Image } from "../../src";

export default class ImageTest extends React.Component {
  render() {
    return (
      <View>
        <Text>SMALL</Text>
        <Image />
        <Text>MEDIUM</Text>
        <Image type="medium" />
        <Text>MEDIUM ROUNDED</Text>
        <Image type="medium" rounded />
        <Text>LARGE</Text>
        <Image type="large" />
        <Text>X LARGE</Text>
        <Image type="xlarge" />
        <Text>X LARGE </Text>
        <Image
          type="xlarge"
          source={{
            uri:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535510488&di=c424cbd5571b06d3cac47f87667d9412&imgtype=jpg&er=1&src=http%3A%2F%2F6.pic.pc6.com%2Fthumb%2Fup%2F2017-9%2F201791010184097766702_600_0.jpeg"
          }}
        />
      </View>
    );
  }
}
