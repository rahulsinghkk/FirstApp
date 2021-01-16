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

const Tab = createBottomTabNavigator()

export default AppNavigation =()=> (
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
)