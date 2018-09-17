/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-09-14 19:40:03 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-09-14 20:08:05
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Alert as RNAlert } from "react-native";
/**
 * alert
 * // iOS和Android上都可用
Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
 */
// Alert({
//   show=()=>{
    
//   }
// })