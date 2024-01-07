import React from 'react'
import logo from './images/logo1.jpg'; 


const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <div className='logo'>
            <img src={logo} alt="image1" />
            </div>
          <div className='nav'>
           <a href="#">Home</a>
           <a href="#">About</a>
           <a href="#">Shop</a>
           <a href="#">Offers</a>
           <a href="#">Contact</a>
          </div>
          <div className='cart'>
            Cart<i class="fa-1x fa-solid fa-cart-shopping"></i>
            </div>
        </nav>
      </header>
      
    </div>
  )
}

export default Navbar
