import React from 'react';
import './Form.css';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';

const FormComponent = ({ items }) => {
    return (
        <Formik initialValues={items.map(item => item.initialValue)}>
            {({ isSubmitting, errors, handleSubmit, initialValues }) => {
                console.log(initialValues)
                return (
                    <Form >
                        <Field
                            type="text"
                            name="fullname"
                            placeholder="Enter your fullname"
                        />
                        <ErrorMessage name="fullname" component="div" />

                        <Field
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                        />
                        <ErrorMessage name="email" component="div" />

                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />

                        <button type="submit" className="btn-green-solid" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormComponent