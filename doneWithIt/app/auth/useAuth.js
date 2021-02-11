import {useContext} from 'react'
import AuthContext from './context'
import authStorage from './storage'
import jwtDecode from 'jwt-decode'

export default useAuth = ()=>{
    const {user , setUser} = useContext(AuthContext);

    const logOut = () =>{
        setUser(null);
        authStorage.removeToken()
    }

    const logIn = (token)=>{
        const user = jwtDecode(token)
        console.log(user)
        setUser(user)
        authStorage.storeToken(token)
    } 

    return {user , setUser , logOut , logIn}
}