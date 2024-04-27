import React, { useRef, useState } from 'react'

import "./JoinUs.css"
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';

import { useFormik } from 'formik'
import { CircularProgress } from '@mui/material';
import { createMemberEntry, createPrayerRequestEntry } from '../../api/strapi';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";
import FormComponent from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';




const JoinUs = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)



  const showToastMessage = () => {
    toast.success("Info sent successfuly !", {
      position: "top-right",
    });
    console.log("toast")
  };

  const createMember = async (data) => {
    try {
      const createdMember = await createMemberEntry(data);
      showToastMessage()
      
    } catch (error) {
      setError(error)
      console.log(error)
      return error
    }
  }


  const onSubmit = async (values, actions) => {
    console.log(values)
    await createMember(values)
    actions.resetForm()
    console.log("submitted")
  }

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email().required('Email is required'),
    phoneNumber: yup.string().matches(
      /^(\+\d{1,3})?(\d{10,14})$/, // Regex for phone number with or without country code
      'Invalid phone number'
    ).required('Phone Number is required'),
    address: yup.string()
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
      name: 'address',
      label: 'Address',
      type: 'text',
      as: 'textarea',
      placeholder: '',
      initialValue: ''
    },

  ]

  return (
    <div className="form-page join-us-page">
      <ToastContainer />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 image-col illustration-col">
            <OptimizedImage src="/assets/welcome-illustration.png" className='form-image' />
          </div>
          <div className="col-lg-6 form-col">
            <h2 className='text-center'>Are you interested in joining us?</h2>
            <p className='text-center mt-2'>We are happy to have you. Kindly give us some info below.</p>

            <FormComponent items={items} onSubmit={onSubmit} validationSchema={validationSchema} submitBtnText="Become A Member"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default JoinUs