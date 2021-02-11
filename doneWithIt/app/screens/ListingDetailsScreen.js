import React from 'react';
import { Image, Text, View , StyleSheet } from 'react-native';
import colors from '../config/colors';
import ListItem from '../components/ListItem'

function ListingDetailsScreen({route}) {

    const listing = route.params;
    return (
        <View >
            <Image style={styles.Image}  source = {{uri : listing.images[0].url}}></Image>
            <View style = {styles.detailsContainer}>
            <Text>{listing.title}</Text>
            <Text style = {styles.price}>{listing.price}</Text>
            </View>
            <View  style = {styles.listItem} >

            <ListItem   image = {require("../assets/rahulProfile.jpg")}
                title = "Rahul Singh"
                subtitle = "2 Listings"
            >

            </ListItem>
            </View>
        </View>
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
    price : {
        color : colors.secondary,
        fontWeight : "bold"
    },
    listItem : {
        marginVertical : 50
    }

})
export default ListingDetailsScreen;