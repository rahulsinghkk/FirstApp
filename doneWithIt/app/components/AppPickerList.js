import React from 'react';
import { TouchableOpacity , StyleSheet} from 'react-native';
import AppText from './AppText';

function AppPickerList({item , onPress}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <AppText style = {styles.item}>{item.label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item : {
        padding : 15
    }
})

export default AppPickerList;