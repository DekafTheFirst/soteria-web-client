import React from 'react';
import './Form.css';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import InputField from '../InputField/InputField';

const FormComponent = ({ items, onSubmit, validationSchema }) => {
    return (
        <Formik
            initialValues={Object.fromEntries(items.map(item => [item.name, item.initialValue]))}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, errors, handleSubmit, initialValues, values, touched}) => {
                return (
                    <Form >
                        {items.map((item)=>(
                            <InputField key={item.name} label={item.label} name={item.name} type={item.type} as={item.as} touched={touched[item.name]} error={errors[item.name]}/>
                        ))}


                        <button type="submit" className="btn-green-solid submit-btn" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormComponent