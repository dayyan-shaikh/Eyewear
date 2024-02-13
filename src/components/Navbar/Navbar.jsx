import React from 'react'
import logo from '../images/logo1.jpg'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <header className="showcase">
      <nav id="Navbar">
        <div className="logo">
          <img src={logo} alt="img" /><br />
        </div>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Offers</a>
          <a href="#">Store Locator</a>
        </div>
        <div className='cart'>
            Cart<i className="fa-1x fa-solid fa-cart-shopping"></i>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar