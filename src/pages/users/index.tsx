import React from 'react'
import SignIn from '../../components/sign-in'
import SignUp from '../../components/sign-up'
import './index.scss'

type Props = {}

const UserAuthentication = (props: Props) => {
  return (
    <div className='user-container'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default UserAuthentication