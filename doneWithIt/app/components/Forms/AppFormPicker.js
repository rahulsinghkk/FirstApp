import React from 'react';
import {useFormikContext} from 'formik'
import AppPicker from '../AppPicker';
import { ErrorMessage } from '.';

function AppFormPicker({items , name , placeholder , PickerItemComponent , numberOfColumns}) {

    const {errors , setFieldValue , values , touched} = useFormikContext()

    return (
        <>
        <AppPicker
        item = {items}
        onSelectItem = {(item)=> setFieldValue(name,item)}
        placeholder = {placeholder}
        selectedItem = {values[name]}
        PickerItemComponent = {PickerItemComponent}
        numberOfColumns = {numberOfColumns}
        >

        </AppPicker>
        <ErrorMessage error= { errors[name]} visible = {touched[name]} ></ErrorMessage>
        </>
    );
}

export default AppFormPicker;