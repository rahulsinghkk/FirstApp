import React from 'react';
import { Image, Text, View , StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';

function Card({title , subTitle ,imageUrl ,onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
        <View style = {styles.card}>
            <Image style={styles.Image} source = {{uri : imageUrl}}></Image>
            <View style = {styles.detailsContainer}>
            <Text>{title}</Text>
            <Text style = {styles.subtitle}>{subTitle}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    Image : {
        width : "100%",
        height : 200
    },
    card :{
        borderRadius : 15,
        backgroundColor : colors.white,
        margin : 20,
        overflow : "hidden"
    },
    detailsContainer : {
        padding : 10
    },
    subtitle : {
        color : colors.secondary,
        fontWeight : "bold"
    }


})
export default Card;