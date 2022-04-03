import React from 'react'
import { Field, ErrorMessage } from 'formik';
import { MDBRadio } from 'mdb-react-ui-kit';

const Radio = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {
          ({field}) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <MDBRadio id={option.value} label={label} {...field} value={option.value} checked={field.value === option.value}/>
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              )
            })
          }
        }
      </Field>
      <ErrorMessage name={name} />
    </div>
  )
}

export default Radio