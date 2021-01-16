import React, { useState } from 'react';
import { Button, Image } from 'react-native';
import Screen from '../components/Screen';
import * as yup from 'yup'
import {AppForm , AppFormField , SubmitButton} from '../components/Forms'

const validationSchema = yup.object().shape({
    email : yup.string().email().required().label("Email"),
    password : yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (

        <Screen>
            <Image source={require("../assets/logo.png")}></Image>

            <AppForm
            initialValues = {{email:'',password : ''}}
            onSubmit ={(values) => console.log(values)}
            validationSchema = {validationSchema}
            >
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

export default LoginScreen;