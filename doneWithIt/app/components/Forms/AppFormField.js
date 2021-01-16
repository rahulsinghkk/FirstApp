import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'

function AppFormField({name , ...othersProps}) {

    const {setFieldTouched , errors , touched , handleChange} = useFormikContext();

    return (
        <>
                <AppTextInput
                    {...othersProps}
                    onChangeText = {handleChange(name)}
                    onBlur = {()=> setFieldTouched(name)}
                ></AppTextInput>
                <ErrorMessage error= { errors[name]} visible = {touched[name]} ></ErrorMessage>

        </>
    );
}

export default AppFormField;