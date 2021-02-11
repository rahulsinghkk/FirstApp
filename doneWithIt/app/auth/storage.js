import * as SecureStore from 'expo-secure-store';
import jwtToken from 'jwt-decode'

const key = "authToken"

const storeToken = async (authToken) => {
   try {
       
    await SecureStore.setItemAsync(key, authToken)

   } catch (error) {
       
    console.log("error while storing authToken",error)
   }
}

const getToken = async () => {
    try {
        
       return await SecureStore.getItemAsync(key);

    } catch (error) {

        console.log("error while getting authToken" , error)
    }
}

const getUser = async () => {
    const token = await getToken(); 
    return (token) ? jwtToken(token) : null
}

const removeToken = async () => {
try {
    await SecureStore.deleteItemAsync(key)
} catch (error) {
    console.log("error removing token " , error)
}
}

export default {
    getToken,
    getUser ,
    storeToken ,
    removeToken
}