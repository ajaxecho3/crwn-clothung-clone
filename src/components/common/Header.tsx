import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

function Header() {
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
          <Link to='/auth' className='nav-link'>
            Sign In
          </Link>
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Header