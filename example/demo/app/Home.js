/*
 * @Author: jerrychir 
 * @Date: 2018-08-19 15:12:54 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-19 20:42:34
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from '../src'



export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Sangoes',
        headerLeft: (
            <Icon
                type="MaterialCommunityIcons"
                name="format-list-bulleted"
                backgroundColor={0.5}
                onPress={navigation.openDrawer}
                color="black"
                size={28}
            />
        ),
    })
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => {

                }}>icon</Text>
                {/* Text */}
                <Text onPress={() => {
                    this.props.navigation.navigate('TextTest')
                }}>Text(文本)</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
