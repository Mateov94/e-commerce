import React from 'react'
import { Link, NavLink } from "react-router-dom"
import './Header.css'

const Header = () => {


  return (
    <header className="header">
      <a className='logo' href="/">
      <img src="https://cdn.shopify.com/s/files/1/0057/5668/2355/files/Postman-logo-orange-2021_1155x.png?v=1637252529" alt="Logo de la pagina" />
      </a>
      <nav className='header__nav'>
        <ul className="nav-list">
          <li className='header__item'>
            <NavLink className="header__link" to='/login'>
              Login
            </NavLink>
            </li>
            <li className='header__item'>
            <NavLink className="header__link" to='/purchases'>
              purchases
            </NavLink>
            </li>
          <li className='header__item'>
            <NavLink className="header__link" to='/cart'>
              Cart
            </NavLink>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header