import { create } from 'apisauce'
import cache from "../utility/cache";
import authStorage from '../auth/storage'

const apiClient = create({
    baseURL:'http://192.168.1.7:9000/api'
})

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers['x-auth-token'] = authToken
})

const get = apiClient.get;

apiClient.get = async (url , params , axiosConfig) => {

     const response = await get(url , params , axiosConfig);

     if(response.ok) {
        console.log('store')
        cache.store( url , response.data)
        
        return response
     }

     console.log('get')
     const data = await cache.get(url)
     console.log(data)
     return data ? {ok : true , data} : response

}

export default apiClient;