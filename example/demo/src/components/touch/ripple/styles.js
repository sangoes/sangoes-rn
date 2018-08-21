/*
 * @Author: jerrychir 
 * @Date: 2018-08-21 15:16:42 
 * @Last Modified by:   jerrychir 
 * @Last Modified time: 2018-08-21 15:16:42 
 */
import { StyleSheet } from 'react-native';

const radius = 10;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },

  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
  },
});

export { styles, radius };
