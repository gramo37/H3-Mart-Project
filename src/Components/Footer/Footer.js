import React from 'react'
import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-right'>
        <div className='menu right-menu1'>
          <h2>COINCAP.IO</h2>
          <ul>
            <li><a href="/">Methodolgy</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/">Our API</a></li>
            <li><a href="/">Rate Comparison</a></li>
            <li><a href="/">Careers</a></li>
          </ul>
        </div>
        
        <div className='menu right-menu2'>
          <h2>LEGALS</h2>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <h2>DISCLAIMER</h2>
          <span>
            Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.
          </span>
        </div>
      </div>
      <div className='footer-left'>
        <div className='menu right-menu1'>
          <h2>FOLLOW US</h2>
          <div>
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </div>
        <div className='menu right-menu2'>
          <h2>COINCAP APP AVAILABLE ON</h2>
          <div>
            <img src="https://coincap.io/static/images/stores/google_play.svg" alt="Google Store"/>
            <img src="https://coincap.io/static/images/stores/apple_store.svg" alt="Apple Store"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer