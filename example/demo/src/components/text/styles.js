/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-19 19:02:06 
 * @Last Modified by: 驷爺.J.C
 * @Last Modified time: 2018-08-20 10:00:41
 */
import { StyleSheet } from 'react-native'
import variables from '../themes'

const styles = StyleSheet.create({
    heading: {
        color: variables.color_text_base,
        fontSize: variables.font_size_heading,
    },
    base:{
        color: variables.color_text_base,
        fontSize: variables.font_size_base,
    },
    text:{
        color: variables.color_text_secondary,
        fontSize: variables.font_size_icontext,
    },
    caption:{
        color: variables.color_text_caption,
        fontSize: variables.font_size_caption,
    },
    secondary:{
        color: variables.color_text_secondary,
        fontSize: variables.font_size_subhead,
    },
})

export default styles