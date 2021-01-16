import React from 'react';
import { View , Image , StyleSheet , Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subtitle, image , IconComponent , onPress , renderRightActions}) {
    return (
        <Swipeable renderRightActions = {renderRightActions}>

        <TouchableHighlight
            onPress = {onPress}
            underlayColor = {colors.light}
        >
        <View style = {styles.container}>
            {IconComponent}
            {image && <Image style = {styles.image} source = {image}></Image>}
            <View style={styles.displayContainer}>
            <Text>{title}</Text>
            {subtitle && <Text>{subtitle}</Text>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        padding : 15,
        backgroundColor : colors.white
    },
    image : {
        width : 70,
        height : 70,
        borderRadius : 35,
        marginRight : 10
    },
    displayContainer: {
        alignItems : "center",
        justifyContent : "center",
        marginLeft : 10
    }
})
export default ListItem;