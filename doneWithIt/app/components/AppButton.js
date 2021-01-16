import React from 'react';
import { TouchableOpacity , StyleSheet , Text} from 'react-native';

import colors from '../config/colors'

function AppButton({title , onPress , color = "primary"}) {
    return (
        <TouchableOpacity style = {[styles.button , {backgroundColor : colors[color]}]} onPress = {onPress}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : colors.primary,
        width : "100%",
        padding : 15,
        alignItems : 'center',
        borderRadius : 25,
        margin : 5
    },
    text:{
        color : colors.white,
        fontSize : 18,
        textTransform : 'uppercase',
        fontWeight : 'bold'
    }
})

export default AppButton;