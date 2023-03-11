import React, { ReactNode } from 'react'

const BUTTON_TYPE_CLASSESS = {
  google: 'google-sign-in',
  inverted: 'inverted',

}

interface ButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  buttontype:  keyof typeof BUTTON_TYPE_CLASSESS
}


function Button(props: ButtonPros) {
  return (
    <button className={` button-container ${BUTTON_TYPE_CLASSESS[props.buttontype]}`} {...props}>
      {props.children}
    </button>
  )
}

export default Button