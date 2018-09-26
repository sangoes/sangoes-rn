/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-19 18:46:25 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-20 10:00:29
 */
import React, { Component } from 'react'
import { Text as RNText, Platform, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'


export default class Text extends Component {
    render() {
        const {
            style,
            type,
        } = this.props
        return (
            <RNText
                ref={c => (this._root = c)}
                {...this.props}
                style={[styles[type], style]}
            >
                {this.props.children}
            </RNText>
        )
    }
}

Text.propTypes = {
    ...RNText.PropTypes,
    type: PropTypes.oneOf([
        'heading',
        'base',
        'text',
        'caption',
        'secondary'
    ]),
}
Text.defaultProps = {
    suppressHighlighting: true,
    type: 'base'
}