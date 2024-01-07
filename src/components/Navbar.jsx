import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <div className='logo'>EyeWear</div>
          <div className='nav'>
           <a href="#">Home</a>
           <a href="#">About</a>
           <a href="#">Shop</a>
           <a href="#">Service</a>
           <a href="#">Contact</a>
          </div>
          <div className='cart'>Cart</div>
        </nav>
      </header>
      
    </div>
  )
}

export default Navbar
