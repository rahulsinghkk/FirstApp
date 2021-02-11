import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

const prefix = 'cache'
const expiryInMin = 30 ;

const store = async (key , value) => {
    try {

        const item = {
            value ,
            timeStamp : Date.now()
        }

        await AsyncStorage.setItem(prefix + key , JSON.stringify(item))
        
    } catch (error) {
        console.log(error)
    }
}

const isExpired = (item) => {

    const now = moment(Date.now())
    const storedTime = moment(item.timeStamp)
    return now.diff(storedTime , 'minutes') > expiryInMin ;

}

const get = async (key) => {
    try {
        
        const value = await AsyncStorage.getItem(prefix + key)

        console.log('getcache')

        if (!value) return null;

        console.log(value)

        const item = JSON.parse(value)
        
        if(isExpired(item)){
            await AsyncStorage.removeItem(prefix + key)
            return null
        }

        console.log('null')

        return item.value
        
    } catch (error) {
        console.log(error)
    }
}

export default {
    store ,
    get
}