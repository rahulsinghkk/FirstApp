import React from 'react';
import { Image, View , StyleSheet, Button} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35}></MaterialCommunityIcons>
            </View>
            <View style = {styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}></MaterialCommunityIcons>
            </View>
            <Image resizeMode = "contain" style = {styles.chair} source = {require("../assets/chair.jpg")}></Image>
        
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon : {
        position : "absolute",
        top : 10,
        left : 30
    },
    deleteIcon : {
        position : "absolute",
        top : 10,
        right : 30
    },
    container : {
        backgroundColor : colors.black,
        flex : 1
    },
    chair : {
        width : "100 %",
        height : "100%"
    }
})

export default ViewImageScreen;