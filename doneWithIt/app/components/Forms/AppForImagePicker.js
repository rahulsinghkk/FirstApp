import React from 'react';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'

function AppForImagePicker({name}) {

    const {errors , setFieldValue , values , touched} = useFormikContext()
    const imageUris = values[name]

    const handleAddImage = (uri)=> {
        setFieldValue(name , [...imageUris , uri])
      }
      const handleRemoveImage = uri => {
        setFieldValue(name , imageUris.filter((imageUri) => imageUri !== uri))
      }

    return (
        <>
        <ImageInputList imageUris={imageUris} onAddImage={handleAddImage} onRemoveImage={handleRemoveImage}></ImageInputList>
        <ErrorMessage error= { errors[name]} visible = {touched[name]} ></ErrorMessage>
        </>
    );
}


export default AppForImagePicker;