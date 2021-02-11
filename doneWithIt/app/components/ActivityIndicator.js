import React from 'react';
import LottieView from 'lottie-react-native'

function ActivityIndicator({visible = false}) {
    if (!visible) return null;
    return (
        <LottieView
        autoPlay
        loop
        source={require('../assets/animation/890-loading-animation.json')}
        >
        </LottieView>
        );
}


export default ActivityIndicator;