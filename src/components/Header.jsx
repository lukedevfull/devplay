import React from 'react'
import logo from '../assets/logo/logo-based.svg'
import { Link } from 'react-router-dom'
const  Header = () => {
  return (
    
    <div className='header'>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link className="header__link" to="">
        <h1>DevPlay</h1>
      </Link>
    </div>
  )
}

export default  Header