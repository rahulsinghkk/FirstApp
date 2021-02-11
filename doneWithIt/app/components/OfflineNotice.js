import React from 'react';
import { View , StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../config/colors';
import AppText from './AppText';
import Constants from 'expo-constants'
import {useNetInfo} from '@react-native-community/netinfo'

function OfflineNotice(props) {

const netInfo = useNetInfo();

if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
        <View style = {styles.container}>
            <AppText> No Internet Connection </AppText>
        </View>
    );

return null
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.primary,
        height : 100,
        position : "relative",
        zIndex : 1,
        width : "100%",
        alignItems : "center",
        justifyContent : "center",
        top : Constants.statusBarHeight
    }
})
export default OfflineNotice;