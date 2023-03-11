import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase'

function Header() {

  const {currentUser} = useContext(UserContext)

  const handleSignOut = async () => {
    await signOutUser()
    
  }
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrwnLogo className='logo' />
        </Link>
        
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            Shop
          </Link>
          {
            currentUser ? <span className='nav-link' onClick={handleSignOut}> Sign Out </span> : <Link to='/auth' className='nav-link'>
              Sign In
            </Link>
          }
        
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Header