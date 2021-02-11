import React, { useContext } from 'react';
import { FlatList, View , StyleSheet } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import  routes  from "../navigation/routes";
import useAuth from '../auth/useAuth';

function AccountScreen({navigation}) {

    const {user , logOut} = useAuth();

    const menuItems = [{
        title : "My Listings",
        icon : {
            name : "format-list-bulleted",
            backgroundColor : colors.primary
        }
    },
    {
        title : "My Messages",
        icon : {
            name : "email",
            backgroundColor : colors.secondary
        },
        targetScreen : routes.MESSAGE
        
    }]


    return (
        <Screen style = {styles.screen}>
            <View style = {styles.container}>
            <ListItem
            title = {user.name}
            subtitle = {user.email}
            image = {require("../assets/rahulProfile.jpg")}
            >
            </ListItem>
            </View>
            <View style = {styles.container}> 
            <FlatList
             data= {menuItems}
             keyExtractor = {menuItems => menuItems.title}
             renderItem = {({item})=><ListItem
             title = {item.title}
             IconComponent = {<Icon name = {item.icon.name} backgroundColor = {item.icon.backgroundColor}></Icon>}
             onPress={()=> navigation.navigate(item.targetScreen)}
             >
             </ListItem>}
            ItemSeparatorComponent = {ListItemSeperator}
            ></FlatList>
            <View style= {styles.container}>
                <ListItem
                 title = "Log Out"
                 IconComponent = {<Icon
                 name = "logout"
                 backgroundColor = "#ffe66d"
                 >
                 </Icon>}
                 onPress = {logOut}
                >

                </ListItem>
            </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container : {
        marginVertical : 20
    },
    screen : {
        backgroundColor : colors.light
    }
})
export default AccountScreen;