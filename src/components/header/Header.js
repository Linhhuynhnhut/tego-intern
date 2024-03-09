import React from 'react'
import './header.scss'
const Header = () => {
  return (
    <div className='container'>
        <nav> 
            <a className='logo' href='#'>Furniture</a>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Doctors</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Gallery</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header