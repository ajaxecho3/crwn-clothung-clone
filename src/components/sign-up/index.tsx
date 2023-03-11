import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase'
import './index.scss'
type Props = {}

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = (props: Props) => {

  

  const [formFields, setFormFields] = useState<typeof defaultFormFields>(defaultFormFields)
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(password !== confirmPassword){
      alert('Passwords do not match')
      return;
    }

    try{
      const response = await createAuthUserWithEmailAndPassword(email, password)
      if(response){
        await createUserDocumentFromAuth(response, { displayName })
        setFormFields(defaultFormFields)

      }
    }catch(e: any){
      switch(e.code){
        case 'auth/wrong-password':
          alert('Incorrect password or email')
          break
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break
        default:
          console.log(e)

      }
      
    }
    
    
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input label={'Display Name'} required type='string' onChange={handleChange} name='displayName' value={displayName} />
        <Input label={'Email'} type='email' required onChange={handleChange} name='email' value={email} />
        <Input label={'Password'} type='password' required onChange={handleChange} name='password' value={password} />
        <Input label={'Confirm Password'} type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

  
        <Button  buttontype='inverted' type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp