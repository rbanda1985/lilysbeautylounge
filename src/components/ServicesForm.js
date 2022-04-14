import React from 'react'
import {Form, Formik} from 'formik';
import { MDBBtn } from 'mdb-react-ui-kit';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import axios from 'axios';



const ServicesForm = () => {

  const baseURL = 'http://localhost:3001/send';

  const salonOptions = [
    {key: 'Yes', value: 'Yes'},
    {key: 'No', value: 'No'}
  ]

  const boxDyeOptions = [
    {key: 'Yes', value: 'Yes'},
    {key: 'No', value: 'No'}
  ]

  const assistanceOptions = [
    {key: 'Myself', value: 'Myself'},
    {key: 'With Assistance', value: 'With Assistance'}
  ]

 
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    salonCare: '',
    salonLast: '',
    usedDye: '',
    color: '',
    application: '',
    lastApplication: ''
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email type').required('Required'),
    phoneNumber: Yup.string().required('Required'),
    salonCare: Yup.string().required('Required'),
    salonLast: Yup.string().when('salonCare', {
      is: 'yes',
      then: Yup.string().required('Required'),
    }),
    usedDye: Yup.string().required('Required'),
    color: Yup.string().when('usedDye', {
      is: 'yes',
      then: Yup.string().required('Required')
    }),
    application: Yup.string().required('Required'),
    lastApplication: Yup.string().when('usedDye', {
      is: 'withassistance',
      then: Yup.string().required('Required')
    })
    })

  const sendEmail = (values) => {
    console.log(values);
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      salonCare: values.salonCare,
      salonLast: values.salonLast,
      usedDye: values.usedDye,
      color: values.color,
      application: values.application,
      lastApplication: values.lastApplication
    };
    axios.post(baseURL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={sendEmail} >
      {
        formik => {
          return <Form>
             <FormikControl
              control='input'
              type='text'
              label='First Name'
              name='firstName'
              />
             <FormikControl
              control='input'
              type='text'
              label='Last Name'
              name='lastName'
              />
              <FormikControl
               control='input'
               type='email'
               label='Email'
               name='email'
                />
               <FormikControl 
                control='input'
                type='text'
                label='Phone Number'
                name='phoneNumber'
                />
                <FormikControl
                 control='radio'
                 label='Within the last 5 years has a professional salon coloured your hair?'
                 name='salonCare'
                 options={salonOptions}
                 />
                 <FormikControl
                  control='input'
                  type='text'
                  label='When was the last time?'
                  name='salonLast'
                  />
                  <FormikControl
                   control='radio'
                   label='Have you box dyed your hair?'
                   name='usedDye'
                   options={boxDyeOptions}
                   />
                   <FormikControl
                    control='input'
                    type='text'
                    label='If so, what color did you use?'
                    name='color'
                    />
                   <FormikControl
                    control='radio'
                    label='Did you apply the color yourself or with the assistance of someone else?'
                    name='application'
                    options={assistanceOptions}
                    />
                    <FormikControl
                     control='input'
                     label='When was the last application?'
                     name='lastApplication'
                     />
<div style={{textAlign: 'center', marginTop: '1em'}}>
<label htmlFor="formFileMultiple" className="form-label">Please upload pictures of the front, back, and the sides of your hair.</label>
<input className="form-control" type="file" id="formFileMultiple" name='image' multiple />
</div>
                    <div className='btn-style'>
                    <MDBBtn type='submit'>Submit</MDBBtn>
                    </div>
          </Form>
        }
      }
    </Formik>
  )
}

export default ServicesForm