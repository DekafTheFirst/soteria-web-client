import React, { useRef, useState } from 'react'

import "./PrayerRequest.css"
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage';

import { useFormik } from 'formik'
import { CircularProgress } from '@mui/material';
import { createPrayerRequestEntry } from '../../../api/strapi';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";
import FormComponent from '../../../components/Form/Form';




const PrayerRequest = () => {
  const [error, setError] = useState(null)


  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: "top-right",
    });
    console.log("toast")
  };

  const createPrayerRequest = async (data) => {
    try {
      const createdPrayerRequest = await createPrayerRequestEntry(data);
      showToastMessage()
    } catch (error) {
      setError(error)
      console.log(error)
      return error
    }
  }


  const onSubmit = async (values, actions) => {
    console.log(values)
    await createPrayerRequest(values)
    actions.resetForm()
    console.log("submitted")
  }

  const validationSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email(),
    phoneNumber: yup.string().matches(
      /^(\+\d{1,3})?(\d{10,14})$/, // Regex for phone number with or without country code
      'Invalid phone number'
    ),
    prayerRequest: yup.string().required("prayer request required")
  })




  // const initialValues = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNumber: '',
  //   details: '',
  // };


  const items = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: '',
      initialValue: '',
    },
    {
      name:'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: '',
      initialValue: ''
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: '',
      initialValue: ''
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '',
      initialValue: ''
    },
    {
      name: 'prayerRequest',
      label: 'Prayer Request',
      type: 'text',
      as: 'textarea',
      placeholder: '',
      initialValue: ''
    },

  ]

  return (
    <div className="form-page prayer-request-page">
      <ToastContainer />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 image-col">
            <OptimizedImage src="/assets/abstract-4.jpg" className='form-image' />
          </div>
          <div className="col-lg-6 form-col">
            <h2>Do you have a prayer request?</h2>
            <p>Tell us about it and we will join you in prayer.</p>

            <FormComponent items={items} onSubmit={onSubmit} validationSchema={validationSchema} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default PrayerRequest