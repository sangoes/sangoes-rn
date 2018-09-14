/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 08:07:58 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-09-14 19:54:13
 */
import React from "react";
import { StyleSheet, Text, Easing, Platform, Animated } from "react-native";
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems,
  NavigationActions,
  SafeAreaView
} from "react-navigation";
import Home from "./Home";
import { Sider } from "./Sider";
import TextTest from "./text/TextTest";
import ButtonTest from "./button/ButtonTest";
import IconTest from "./icon/IconTest";
import ImageTest from "./image/ImageTest";
import ItemTest from "./item/ItemTest";
import BlankTest from "./blank/BlankTest";
import ActivityIndicatorTest from "./ActivityIndicator/ActivityIndicatorTest";
import ToastTest from "./toast/ToastTest";
import BadgeTest from "./badge/BadgeTest";
import TextInputTest from "./textInput/TextInputTest";
import AlertTest from "./alert/AlertTest";

// const HomeNavigator = createBottomTabNavigator({
//   Home: { screen: Home },
//   // Account: { screen: Account },
// })

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    IconTest: { screen: IconTest },
    TextTest: { screen: TextTest },
    ButtonTest: { screen: ButtonTest },
    ImageTest: { screen: ImageTest },
    ItemTest: { screen: ItemTest },
    BlankTest: { screen: BlankTest },
    ActivityIndicatorTest: { screen: ActivityIndicatorTest },
    ToastTest: { screen: ToastTest },
    BadgeTest: { screen: BadgeTest },
    TextInputTest: { screen: TextInputTest },
    AlertTest: { screen: AlertTest }
  },
  {
    headerMode: "float"
  }
);
const HomeNavigator = createDrawerNavigator(
  {
    Home: { screen: MainNavigator }
  },
  {
    contentComponent: props => <Sider {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeNavigator }
  },
  {
    headerMode: "none",
    mode: Platform.OS === "ios" ? "modal" : "card",
    navigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateY }] };
      }
    })
  }
);

export default AppNavigator;
