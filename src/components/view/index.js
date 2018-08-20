/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 17:59:20 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-19 18:09:26
 */
import React, { Component } from 'react'
import { View as RNView } from 'react-native'
import PropTypes from 'prop-types'

export default class View extends Component {
    render() {
        return (
            <RNView ref={c => (this._root = c)} {...this.props}>
                {this.props.children}
            </RNView>
        )
    }
}

View.propTypes = {
    ...RNView.PropTypes,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.array
    ]),
}