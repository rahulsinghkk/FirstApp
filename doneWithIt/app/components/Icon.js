import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { View , StyleSheet} from 'react-native';

function Icon({
    name ,
    size = 50,
    backgroundColor = "#fff",
    iconColor = "#000"}
) {
    return (
        <View style={{width : size ,height : size , borderRadius : size/2 , backgroundColor , alignItems : "center" , justifyContent : "center"}}>
            <MaterialCommunityIcons name = {name} color = {iconColor} size = {size*0.5}></MaterialCommunityIcons>
        </View>
    );
}

export default Icon;