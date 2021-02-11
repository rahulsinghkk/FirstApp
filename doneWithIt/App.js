import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigation from './app/navigation/AppNavigation';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'
import AppLoading  from 'expo-app-loading'


export default function App() {

const [user , setUser] = useState();
const [isReady , setIsReady] = useState(false);

const restoreUser = async () => {

   const user = await authStorage.getUser();
   if (user) setUser(user) ;

}

if (!isReady){
  return <AppLoading  startAsync = {restoreUser}  onFinish = {()=> setIsReady(true)}  onError={console.warn}/>
}

  return (
    <AuthContext.Provider value = {{user , setUser}}>
    <OfflineNotice></OfflineNotice>
    <NavigationContainer theme={NavigationTheme}>
      {user ? <AppNavigation/> : <AuthNavigator></AuthNavigator> }
    </NavigationContainer>
    </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
