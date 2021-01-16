import React from 'react';
import { View , StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({item , onPress}) {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={onPress}>

                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}></Icon>
                
            </TouchableOpacity> 
        <AppText style = {styles.text}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal : 30,
        paddingVertical : 15,
        alignItems : "center",
        width : '33%',
    },
    text : {
        marginTop : 5,
        textAlign : 'center'
    }
})
export default CategoryPickerItem;