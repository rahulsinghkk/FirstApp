import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import ListingsScreen from '../screens/ListingsScreen'
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import NewListingButton from './NewListingButton'
import routes from './routes'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import { useEffect } from 'react/cjs/react.development';

const Tab = createBottomTabNavigator()

export default AppNavigation =()=> {

    useEffect(()=>{
        registerForPushNotifications();
    },[])

    const registerForPushNotifications = async ()=> {
        try {
            
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return ;
            
           const token = await Notifications.getExpoPushTokenAsync();
           console.log(token);
        } catch (error) {
            console.log("error getting notification token", error)
        }
    }

    return (
    <Tab.Navigator>
        <Tab.Screen name={routes.FEED} component={FeedNavigator} options={{tabBarIcon: ({color,size})=> <MaterialCommunityIcons name="home" size={size} color={color}/>}}></Tab.Screen>
        <Tab.Screen name={routes.LISTINGEDIT}  component={ListingEditScreen}
        options={({navigation})=>({
            tabBarButton:()=><NewListingButton onPress={()=> navigation.navigate(routes.LISTINGEDIT)}></NewListingButton>,
            tabBarIcon: ({color,size})=> <MaterialCommunityIcons name="plus-circle" size={size} color={color}/>
        })}
            ></Tab.Screen>
        <Tab.Screen name={routes.ACCOUNT} component={AccountNavigator} options={{tabBarIcon: ({color,size})=> <MaterialCommunityIcons name="account" size={size} color={color}/>}}></Tab.Screen>
    </Tab.Navigator>
    );
};
