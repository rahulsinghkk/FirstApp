import React, { useEffect, useState } from 'react';
import * as yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms';
import AppForImagePicker from '../components/Forms/AppForImagePicker';
import AppFormPicker from '../components/Forms/AppFormPicker';
import Screen from '../components/Screen';
import colors from '../config/colors';
import * as Location from 'expo-location'
import useLocation from '../hooks/useLocation';


const validationSchema = yup.object().shape({
    title : yup.string().min(1).required().label("Title"),
    price : yup.number().required().min(1).max(10000).label("Price"),
    description : yup.string().label("Description"),
    category : yup.object().required().nullable().label("Category"),
    images : yup.array().min(1 , "Please select atleast one image to continue")
})

const Categories = [{label : "Furniture" , value : 1 , backgroundColor : colors.medium , icon : "apps"},
                    {label : "Clothing" , value :2 , backgroundColor : colors.medium , icon : "apps"},
                    {label : "Camera" , value : 3 , backgroundColor : colors.medium , icon : "apps"}]

function ListingEditScreen(props) {

    const Location = useLocation();

    return (
        <Screen>
            <AppForm
             initialValues = {{title : "", price : "", description : "",category : null , images : []}}
             onSubmit = {() => console.log(Location)}
             validationSchema = {validationSchema}
            >
              <AppForImagePicker name="images" ></AppForImagePicker>
              <AppFormField name="title" placeholder = "Title" maxLength={255}></AppFormField>
              <AppFormField name="price" keyboardtype = "numeric" maxLength={8} placeholder="Price"></AppFormField>
              <AppFormPicker items={Categories} name = "category" placeholder = "Category" numberOfColumns={3} PickerItemComponent={CategoryPickerItem}></AppFormPicker>
              <AppFormField name="description" placeholder="Description" miltiline ></AppFormField>
              <SubmitButton title="Submit"></SubmitButton>
            </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;