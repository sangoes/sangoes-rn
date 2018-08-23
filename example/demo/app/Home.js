/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 15:12:54 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-23 20:05:42
 */
import React from "react";
import { StyleSheet, RefreshControl } from "react-native";
import { Icon, Text, ScrollView, SectionList, Item, Divider } from "../src";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false
    };
  }
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
    const sectionData = [
      {
        title: "组件(Components)",
        data: [
          { name: "图标(ICON)", class: "IconTest" },
          { name: "文本(TEXT))", class: "TextTest" },
          { name: "按钮(BUTTON))", class: "ButtonTest" },
          { name: "图片(IMAGE))", class: "ImageTest" },
          { name: "ITEM(ITEM))", class: "ItemTest" },
          { name: "空白(BLANK))", class: "BlankTest" },
          { name: "分割线(DIVIDER))", class: "DividerTest" },
          { name: "指示器(ActivituIndicator)", class: "ActivityIndicatorTest" },
          { name: "提示(Toast)", class: "ToastTest" },
          { name: "微标数(Badge)", class: "BadgeTest" }
        ]
      }
    ];
    return (
      <SectionList
        renderItem={({ item, index, section }) => (
          <Item
            title={item.name}
            checkmark
            onPress={() => {
              this.props.navigation.navigate(item.class);
            }}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Item type="section" title={title} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        sections={sectionData}
        keyExtractor={(item, index) => item + index}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            colors={["#ff0000", "#00ff00", "#0000ff", "#3ad564"]}
            progressBackgroundColor="#ffffff"
          />
        }
      />
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
