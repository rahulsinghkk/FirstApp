import apiClient from './client'

const endpoint = '/listings'

 const getListings = ()=> apiClient.get(endpoint);

 const addListings = (listings , uploadProgress) => {
     const data = new FormData();

     data.append('title' , listings.title)
     data.append('price' , listings.price)
     data.append('categoryId' , listings.category.value)
     data.append('description' , listings.description)

     listings.images.forEach((image , index) => {
         data.append('images',{
            name : 'image' + index,
            type : 'image/jpeg',
            uri : image
         })
     });

     if(listings.location) data.append('location' , JSON.stringify(listings.location));

     return apiClient.post(endpoint , data , {onUploadProgress : (progress) => uploadProgress(progress.loaded/progress.total)});

 }

 export default {
     getListings , 
     addListings
 }