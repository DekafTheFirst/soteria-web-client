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
    firstName: yup.string().required("this field is required"),
    lastName: yup.string().required("this field is required"),
    email: yup.string().email(),
    phoneNumber: yup.string().matches(
      /^(\+\d{1,3})?(\d{10,14})$/, // Regex for phone number with or without country code
      'Invalid phone number'
    ),
    prayerRequest: yup.string().required("Please fill in the details about your prayer request")
  })

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };
  
  const { handleBlur, handleChange, handleSubmit, values, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      prayerRequest: '',
    },
    validationSchema,
    onSubmit,
  })

  console.log(touched)

  const items = [
    {name: 'firstName', type: 'text', placeholder:'', initialValue: ''},
    {name: 'lastName', type: 'text', placeholder:'', initialValue: ''},
    {name: 'email', type: 'email', placeholder:'', initialValue: ''},
    {name: 'phoneNumber', type: 'tel', placeholder:'', initialValue: ''},
  ]

  return (
    <div className="form-page prayer-request-page">
      <ToastContainer />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 image-col">
            <OptimizedImage src="/assets/abstract-4.jpg" className='form-image' />
          </div>
          {/* <form className="col-lg-6 content" onSubmit={handleSubmit}>
            <h2>Do you have a prayer request?</h2>
            <p>Tell us about it and we will join you in prayer.</p>

            <ul className='inputs'>
              <li className=''>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? "input-error" : ""
                  }
                />
                <span className="error">{errors.firstName && touched.firstName && errors.firstName}</span>
              </li>
              <li>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? "input-error" : ""
                  }
                />
                <span className="error">{errors.lastName && touched.lastName && errors.lastName}</span>

              </li>
              <li className=''><label htmlFor="email">Email:</label><input type="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} /></li>
              <li className=''><label htmlFor="phoneNumber">Phone Number:</label><input type="tel" id="phoneNumber" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} /></li>
              <li className='text-area'>
                <label htmlFor="prayerRequest">Details: *</label>
                <textarea
                  id="prayerRequest"
                  cols="30"
                  rows="4"
                  value={values.prayerRequest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.prayerRequest && touched.prayerRequest ? "input-error" : ""
                  }
                />
                <span className="error">{errors.prayerRequest && touched.prayerRequest && errors.prayerRequest}</span>

              </li>
              <p className='text-start'>* indicates a required field.</p>
            </ul>

            {!isSubmitting && <button type="submit" value="Send" className="btn-green-solid mt-2">Submit Prayer Request </button>}
          </form> */}
          <div className="col-lg-6 content">
            <h2>Do you have a prayer request?</h2>
            <p>Tell us about it and we will join you in prayer.</p>

            <FormComponent items={items}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PrayerRequest