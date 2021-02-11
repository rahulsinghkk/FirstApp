import React, { useState , useContext } from 'react';
import { Button, Image , StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import * as yup from 'yup'
import {AppForm , AppFormField , ErrorMessage, SubmitButton} from '../components/Forms'
import AuthApi from '../api/auth'
import jwtDecode from 'jwt-decode'
import authStorage from '../auth/storage'
import useAuth from '../auth/useAuth';

const validationSchema = yup.object().shape({
    email : yup.string().email().required().label("Email"),
    password : yup.string().required().min(4).label("Password")
})



function LoginScreen(props) {

    const {logIn} = useAuth()

    const [loginFailed , setLoginFailed] = useState(false)

    const handleSubmit = async ({email , password}) => {
        const response = await AuthApi.login(email,password)
        if (!response.ok) return setLoginFailed(true)
        setLoginFailed(false)
        logIn(response.data)
    }
    return (


        <Screen>
            <Image style={styles.logo} source={require("../assets/logo.png")}></Image>

            <AppForm
            initialValues = {{email:'',password : ''}}
            onSubmit ={handleSubmit}
            validationSchema = {validationSchema}
            >
                        <ErrorMessage error={"Invalid email or password."} visible={loginFailed}></ErrorMessage>
                        <AppFormField icon="email" 
                        autocorrect = {false}
                        autoCapitalize = "none"
                        placeholder = "Email"
                        keyboardType = "email-address"
                        textContentType = "emailAddress"
                        name = "email"
                        ></AppFormField>
                        <AppFormField icon="lock"
                        autocorrect = {false}
                        autoCapitalize = "none"
                        placeholder = "Password"
                        secureTextEntry
                        textContentType = "password"
                        name = "password"
                        ></AppFormField>
                        <SubmitButton title="Login"></SubmitButton>
                    
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
      }
});
export default LoginScreen;