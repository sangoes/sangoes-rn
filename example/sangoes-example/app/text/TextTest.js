/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 20:07:21 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-20 10:06:14
 */
import React from 'react'
import { Text, Touchable, View } from '../../src';



export default class TextTest extends React.Component {
    render() {
        return (
            // 
            <View>
                <Text type='heading'>Heading 1</Text>
                <Text type='caption'>Caption</Text>
                <Text type='base'>Base</Text>
                <Text type='text'>Text</Text>
                <Text type='secondary'>Secondary</Text>
            </View>
        );
    }
}