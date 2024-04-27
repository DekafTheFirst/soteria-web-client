import React, { useRef, useState } from 'react'

import "./ContactUs.css"
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage';

import { useFormik } from 'formik'
import { CircularProgress } from '@mui/material';
import { createMemberEntry, createPrayerRequestEntry } from '../../../api/strapi';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";
import FormComponent from '../../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

import emailjs from '@emailjs/browser';



const ContactUs = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)



  const showToastMessage = () => {
    toast.success("Inquiry send successfuly !", {
      position: "top-right",
    });
    console.log("toast")
  };



  const sendEmail = (values) => {
    console.log(values)

    emailjs
      .send('service_52kwkmi', 'template_pjohd2s', values, {
        publicKey: 'VONmTEDog8CxIxNc5',
      }
      )
      .then(
        () => {
          showToastMessage()
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };


  const onSubmit = async (values, actions) => {
    sendEmail(values)
    actions.resetForm()
  }

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email().required('Email is required'),
    phoneNumber: yup.string().matches(
      /^(\+\d{1,3})?(\d{10,14})$/, // Regex for phone number with or without country code
      'Invalid phone number'
    ).required('Phone Number is required'),
    details: yup.string().required('Please fill in the details')
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
      name: 'lastName',
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
      name: 'details',
      label: 'Details',
      type: 'text',
      as: 'textarea',
      placeholder: '',
      initialValue: ''
    },

  ]

  return (
    <div className="form-page contact-us-page">
      <ToastContainer />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 image-col illustration-col">
            <OptimizedImage src="/assets/contact-us-bro.png" className='form-image' />
          </div>
          <div className="col-lg-6 form-col">
            <h2 className='text-center'>Need to get in touch us?</h2>
            <p className='text-center mt-2'>Alright, just fill the form below and we will get back to you shortly.</p>

            <FormComponent items={items} onSubmit={onSubmit} validationSchema={validationSchema} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs