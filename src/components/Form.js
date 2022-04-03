import React from 'react'
import {Fomik, Form, Formik} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import emailjs from '@emailjs/browser';

const Form = () => {
  const salonOptions = [
    {key: 'Yes', value: 'yes'},
    {key: 'No', value: 'no'}
  ]

  const assistanceOptions = [
    {key: 'Myself', value: 'myself'},
    {key: 'With Assistance', value: 'withassistance'}
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
    color: Yup.string().required('Required'),
    application: Yup.string().required('Required'),
    lastApplication: Yup.string().when('application', {
      is: 'withassistance',
      then: Yup.string().required('Required')
    })
    })

    const onSubmit = values => {
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qutuc5e', 'template_0dl88fe', form.current, '7cUWmZ-GSLAHP1PN8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    }


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
                type='number'
                label='Phone Number'
                name='phoneNumber'
                />
                <FormikControl
                 control='radio'
                 type='radio'
                 label='Within the last 5 years has a professional salon coloured your hair?'
                 name='salonCare'
                 />
                 <FormikControl
                  control='input'
                  type='text'
                  label='When was the last time?'
                  name='salonLast'
                  />
                  <FormikControl
                   control='radio'
                   type='radio'
                   label='Have you box dyed your hair?'
                   name='usedDye'
                   />
                   <FormikControl
                    control='input'
                    type='text'
                    label='If so, what color did you use?'
                    name='color'
                    />
                   <FormikControl
                    control=''
          </Form>
        }
      }
    </Formik>
  )
}

export default Form