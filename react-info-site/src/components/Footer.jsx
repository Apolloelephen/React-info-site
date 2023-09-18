import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
        <div className='left'>
            <h1>Resources</h1>
            <ul>
                <li><a>Blog</a></li>
                <li><a>Help Center</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Terms of Service</a></li>
            </ul>
        </div>
        <div className='center'>
            <h1>Links</h1>
            <ul>
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Info</a></li>
                <li><a>Contact Us</a></li>
            </ul>
        </div>
        <div className='right'>
            <h1>Socials</h1>
            <ul>
                <li><a>Blog</a></li>
                <li><a>Help Center</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Terms of Service</a></li>
            </ul>
        </div>
        </div>
        <div className='under'>
            <p>&copy;Copyright 2023 APOLLO</p>
            <h5>All Rights Reserved</h5>
        </div>
    </div>
  )
}

export default Footer

