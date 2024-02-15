import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
            <div className="footer__col">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem, ipsum dolor sit amet consectetur </p>
                
            </div>
            <div className="footer__col">
                <h3>Customer Service</h3>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Returns & Exchanges</a></li>
                    <li><a href="#">Shipping</a></li>
                </ul>
            </div>
            <div className="footer__col">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=100006539163202">Facebook</a></li>
                    <li><a href="https://twitter.com/home">Twitter</a></li>
                    <li><a href="https://www.instagram.com/dayyan__shk/">Instagram</a></li>
                </ul>
            </div>
            <div className='footer__col'>
              <h3>Address</h3>
            <ul>
              <li>999 Ambernath West, Mumbai, India 421501</li>
              <li>Email: chai_pi_lo_friends@gmail.com</li>
              <li>Phone: +91 8989898989</li>
            </ul>
            </div>
        </div>
      </div>
    </footer>

    
  )
}

export default Footer
