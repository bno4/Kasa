import React from 'react'
import LogoImg from '../assets/img/logo.svg'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
        <img src={LogoImg} alt="Logo Kasa" />
      </NavLink>
    </div>
  )
}

export default Logo
