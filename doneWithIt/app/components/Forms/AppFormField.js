import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'

function AppFormField({name , ...othersProps}) {

    const {setFieldTouched , errors , touched , setFieldValue , values} = useFormikContext();

    return (
        <>
                <AppTextInput
                    {...othersProps}
                    onChangeText = {text => setFieldValue(name , text)}
                    onBlur = {()=> setFieldTouched(name)}
                    value = {values[name]}
                ></AppTextInput>
                <ErrorMessage error= { errors[name]} visible = {touched[name]} ></ErrorMessage>

        </>
    );
}

export default AppFormField;