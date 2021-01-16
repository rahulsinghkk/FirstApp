import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createStackNavigator()

const FeedNavigator = ()=>(
    <Stack.Navigator mode="modal" screenOptions={{headerShown:false}}>
        <Stack.Screen name = {routes.LISTINGS} component={ListingsScreen}></Stack.Screen>
        <Stack.Screen name = {routes.LISTING_DETAILS} component={ListingDetailsScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
)
export default FeedNavigator;