import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { Field, ErrorMessage } from 'formik';

const Input = ({ label, name, ...rest}) => {
  return (
    <div className='form-input'>
      <label htmlFor={name}>{label}</label>
      <Field as={MDBInput} id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  )
}

export default Input