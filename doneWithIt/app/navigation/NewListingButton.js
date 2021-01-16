import React from 'react';
import { View , StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function NewListingButton({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style = {styles.container}>
            <MaterialCommunityIcons name="plus-circle" size={40} color={colors.white}></MaterialCommunityIcons>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 50,
        alignItems:'center',
        backgroundColor : colors.primary,
        width: 100,
        height : 100,
        bottom:40,
        borderColor : colors.white,
        justifyContent:'center',
        borderWidth:15
    }
})
export default NewListingButton;