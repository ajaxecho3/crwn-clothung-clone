import React, {  ReactNode } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode
}

function Input(props: InputProps) {
  const valueLength = props.value?.toString().length

  return (
    <div className='group'>
      <input className='form-input'  {...props} />
      {
        props.label && (<label className={`${valueLength ? 'shrink' : null} form-input-label`}>{props.label}</label>)
      }
    </div>
  )
}

export default Input