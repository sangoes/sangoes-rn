/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-19 15:48:00 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-19 15:49:25
 */
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import {
    SafeAreaView,
  } from 'react-navigation'

export class Sider extends Component {
    render() {
        return (
            <ScrollView>
                <SafeAreaView
                    style={{ flex: 1 }}
                    forceInset={{ top: 'always', horizontal: 'never' }}
                >

                </SafeAreaView>
            </ScrollView>
        )
    }
}