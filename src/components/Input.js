import React from 'react'
import { Field, ErrorMessage } from 'formik';
import { MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';

const Input = ({ label, name, ...rest}) => {
  return (
    <Field name={name}>
      {
        ((field, form) => {
          return <MDBInputGroup textBefore={name} className='mb-3'>
            <input className='form-control' {...rest} {...field} />
            <ErrorMessage name={name} />
          </MDBInputGroup>
        })
      }
    </Field>
  )
}

export default Input