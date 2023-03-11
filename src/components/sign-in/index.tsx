import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import {  createUserDocumentFromAuth, signAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase'
import './index.scss'
type Props = {}

const defaultFormFields = {
  
  email: '',
  password: '',
 
}

const SignIn = (props: Props) => {



  const [formFields, setFormFields] = useState<typeof defaultFormFields>(defaultFormFields)
  const {
    
    email,
    password,
   
  } = formFields

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

   
    try {
      const response = await signAuthUserWithEmailAndPassword(email, password)

      console.log(response)
     
    } catch (e: any) {
      if (e.code === 'auth/email-already-in-use') {
        alert('Cannot create user, Email already in use')
      } else {
        console.log('user creation error:', e)
      }
    }


  }
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    await createUserDocumentFromAuth(response)
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input label={'Email'} type='email' required onChange={handleChange} name='email' value={email} />
        <Input label={'Password'} type='password' required onChange={handleChange} name='password' value={password} />


        <div className='form-action'>
          <Button buttontype='inverted' type='submit'>Sign In</Button>
          <Button buttontype='google' type='button' onClick={logGoogleUser}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn