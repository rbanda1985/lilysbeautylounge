import React from 'react'
import { Field, ErrorMessage } from 'formik';
import { MDBRadio } from 'mdb-react-ui-kit';
import TextError from './TextError';

const Radio = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-input'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {
          ({field}) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <MDBRadio type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value}/>
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              )
            })
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Radio