import React from 'react'
import Input from './Input'
import Radio from './Radio'

const FormikControl = ({control}) => {
    switch(control) {
      case 'input': return <Input {...rest} />
          case 'radio': <Radio {...rest} />
            default: return null
    }
}

export default FormikControl