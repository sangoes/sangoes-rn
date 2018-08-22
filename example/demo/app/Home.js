/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 15:12:54 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-22 12:53:14
 */
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text, ScrollView } from "../src";

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Sangoes",
    headerLeft: (
      <Icon
        type="MaterialCommunityIcons"
        name="format-list-bulleted"
        backgroundColor={0.5}
        onPress={navigation.openDrawer}
        color="black"
        size={28}
      />
    )
  });
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text
            onPress={() => {
              this.props.navigation.navigate("IconTest");
            }}
          >
            ICON(图标及按钮)
          </Text>
          {/* Text */}
          <Text
            onPress={() => {
              this.props.navigation.navigate("TextTest");
            }}
          >
            TEXT(文本)
          </Text>
          {/* Button */}
          <Text
            onPress={() => {
              this.props.navigation.navigate("ButtonTest");
            }}
          >
            BUTTON(按钮)
          </Text>
          {/* Image */}
          <Text
            onPress={() => {
              this.props.navigation.navigate("ImageTest");
            }}
          >
            IMAGE(图片)
          </Text>
          {/* Item */}
          <Text
            onPress={() => {
              this.props.navigation.navigate("ItemTest");
            }}
          >
            Item(列表Item)
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  }
});
