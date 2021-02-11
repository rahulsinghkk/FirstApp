import { useState } from 'react';

export default useApi = (apiFunc) => {

    const [data , setData] = useState([])
    const [error , setError] = useState(false)
    const [loading,setloading] = useState(false)

    const request = async () => {
        
        setloading(true);
        const response = await apiFunc();
        setloading(false);

        if (!response.ok) return setError(true);

        setError(false)
        setData(response.data)
    }

    return {
        data , error , loading , request
    }
}