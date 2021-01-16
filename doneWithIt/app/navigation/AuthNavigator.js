import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import routes from './routes';

const Stack = createStackNavigator()

export default AuthNavigator = () => (

    <Stack.Navigator >
        <Stack.Screen name={routes.WELCOME} options={{headerShown:false}} component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen}></Stack.Screen>
     </Stack.Navigator>
)