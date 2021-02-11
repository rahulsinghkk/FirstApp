import React from 'react';
import { View , StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native'

function UploadScreen({onDone , progress = 0 , visible = false}) {
    return (
        <Modal visible={visible}>
            <View style = {styles.container}>
                {progress < 1 ? 
                <Progress.Bar progress={progress} color={colors.primary} width={200}></Progress.Bar> 
                :
                <LottieView style={{width:150}} onAnimationFinish={onDone} loop={false} autoPlay source={require('../assets/animation/lf30_editor_rrtjpbxj.json') }/>
                }
                
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
})
export default UploadScreen;