import React from 'react';
import { TextInput, View , StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import defaultStyle from '../config/styles'

function AppTextInput({icon , ...otherProps}) {
    return (
            <View style = {styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size = {25} color = {colors.medium} style = {styles.icon} ></MaterialCommunityIcons>}
                <TextInput style = {defaultStyle.textInput} {...otherProps} ></TextInput>
            </View>
           
        );
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 25,
        width : "100%",
        backgroundColor : colors.light,
        flexDirection : "row",
        padding : 15,
        marginVertical : 10
    },
    icon : {
        marginRight : 15
    }

})

export default AppTextInput;