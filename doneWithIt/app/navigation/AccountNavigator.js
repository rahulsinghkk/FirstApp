import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import MessageScreen from '../screens/MessageScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AccountScreen from '../screens/AccountScreen';
import routes from './routes';

const Stack = createStackNavigator()

export default AccountNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={routes.ACCOUNT} component={AccountScreen}></Stack.Screen>
        <Stack.Screen name={routes.MESSAGE} component={MessageScreen}></Stack.Screen>
        <Stack.Screen name={routes.WELCOME} component={WelcomeScreen}></Stack.Screen>

    </Stack.Navigator>
)