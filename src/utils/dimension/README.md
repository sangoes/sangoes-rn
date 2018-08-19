##USEAGE
    import React, { Component } from 'react';
    import {
      StyleSheet,
      Text,
      View,
    } from 'react-native';
    import { width, height, totalSize } from 'react-native-dimension';
    
    class MyExample extends Component {
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.textWrapper}>
              <Text style={styles.myText}>Yeah... This is awesome!</Text>
            </View>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 20,
      },
      textWrapper: {
        height: height(70), // 70% of height device screen
        width: width(80), // 80% of width device screen
        backgroundColor: 'yellow',
      },
      myText: {
        fontSize: totalSize(2) // 2% of total screen size
      }
    });
    
    export default MyExample;
