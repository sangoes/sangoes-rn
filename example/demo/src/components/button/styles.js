/*
 * @Author: jerrychir 
 * @Date: 2018-08-20 10:09:27 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-21 15:52:51
 */
import { StyleSheet } from 'react-native'
import variables from '../themes'


const styles = StyleSheet.create({
    default:{
        margin: 10,
        padding: 10,
    },
    primary:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variables.brand_primary,

    },
})

export default styles