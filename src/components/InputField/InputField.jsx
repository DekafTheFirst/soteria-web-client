import React from 'react';
import './InputField.css';
import { ErrorMessage, Field } from 'formik';

const InputField = ({ name, label, type, placeholder, as, touched, error }) => {
    if (touched) console.log(name, error)
    return (
        <div className={`input-item ${as == 'textarea' ? 'text-area' : '' }`}>
            <span>{label}:</span>
            <Field
                as={as ? as : 'input'}
                type={type}
                name={name}
                placeholder={placeholder}
                className=''
            />
            <div className="error-message-container">
                <ErrorMessage name={name} component='span' className='error' />
            </div>
        </div>

    )
}

export default InputField