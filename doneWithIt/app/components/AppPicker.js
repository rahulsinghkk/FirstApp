import React ,{useState} from 'react';
import { TextInput, View , StyleSheet , Modal ,Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import defaultStyle from '../config/styles'
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Screen from './Screen';
import AppPickerList from './AppPickerList';


function AppPicker({item ,icon ,onSelectItem , placeholder ,  selectedItem , numberOfColumns = 1, PickerItemComponent = AppPickerList}) {

    const [modalVisible , setModalVisible] = useState(false)

    return (
        <>
        <TouchableWithoutFeedback onPress = {()=> setModalVisible(true)}>
            <View style = {styles.container}>
                <MaterialCommunityIcons name={icon} size = {25} color = {colors.medium} style = {styles.icon} ></MaterialCommunityIcons>
                <AppText style = {styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons name = "chevron-down" size = {25} color = {defaultStyle.colors.medium}></MaterialCommunityIcons>
            </View>
            </TouchableWithoutFeedback>
             <Modal visible = {modalVisible} animationType = "slide">
             <Screen>
             <Button title = "Close" onPress = {()=>setModalVisible(false)}></Button>
             <FlatList
                data = {item}
                numColumns = {numberOfColumns}
                keyExtractor = {item => item.value.toString()}
                renderItem = {({item})=> <PickerItemComponent item = {item} onPress = {()=>{
                    setModalVisible(false);
                    onSelectItem(item)
                }
                }></PickerItemComponent>}
             ></FlatList>
             </Screen>
         </Modal>
         </>
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
    },
    text : {
        flex :1
    }

})

export default AppPicker;