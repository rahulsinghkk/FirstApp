import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text} from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
    return (
      <ImageBackground 
      style={styles.background}
      source={require("../assets/background.png")}
      >
          <View style = {styles.logoContainer}>
          <Image 
          style= {styles.logo}
          source={require("../assets/logo.png")}></Image>
          <Text style= {styles.tagline}> Sell What You Dont Need</Text>
          </View>
          <View style = {styles.buttonsContainer}>
          <AppButton title="Login" onPress = {()=> navigation.navigate(routes.LOGIN)} > </AppButton>
          <AppButton title="Register" onPress = {() => navigation.navigate(routes.REGISTER)} color = "secondary"> </AppButton>
          </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : "flex-end",
        alignItems : "center"
    },
    buttonsContainer : {
        padding : 15,
        width : '100%'
    },
    logo:{
        width : 100,
        height : 100,
    },
    logoContainer:{
        position : "absolute" ,
        top : 50,
        alignItems : "center"
    },
    tagline : {
        fontSize : 25,
        fontWeight : "600",
        color : "#FF9800"
    }
})

export default WelcomeScreen;