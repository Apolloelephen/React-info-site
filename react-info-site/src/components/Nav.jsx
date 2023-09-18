import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
        <h1>HOPE PHILIP</h1>
        <ul className='navlinks'> 
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/info'>Info</a></li>
            <li><a href='/contact'>Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Nav