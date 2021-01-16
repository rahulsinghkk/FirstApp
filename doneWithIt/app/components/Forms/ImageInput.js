import React , {useEffect} from 'react';
import { View , StyleSheet, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

function ImageInput({imageUri , onChangeImage}) {

    useEffect(()=>{
        requestPermission();
      },[])

    const requestPermission = async () => {
        const {granted} =  await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted){
          alert("you need to enable to use it")
        }
      }

    const handlePress = ()=> {
        if (!imageUri) selectImage();
        else {
            Alert.alert('Delete','Are you sure you want to delete this image',[
            {text : 'Yes', onPress : ()=> onChangeImage(null)},
            {text : 'No'}
            ])
        }

    }

    const selectImage = async () => {
        try {
          const result =  await ImagePicker.launchImageLibraryAsync({
              mediaTypes : ImagePicker.MediaTypeOptions.Images,
              quality : 0.5 
          })
          if (!result.cancelled){
            onChangeImage(result.uri)
          }
        } catch (error) {
          alert("Error retriving image" + error)
        }
       }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style = {styles.container}>
            {!imageUri &&
            <MaterialCommunityIcons name='camera' size ={40} color = {colors.medium}></MaterialCommunityIcons>}
            {imageUri && <Image source={{uri : imageUri}} style = {styles.image}></Image>}
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container : {
        width : 100,
        height : 100,
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 15 ,
        backgroundColor : colors.light,
        overflow : 'hidden'
    },
    image : {
        width : "100%",
        height : "100%"
    }
})
export default ImageInput;