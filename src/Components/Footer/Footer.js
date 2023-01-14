import React from 'react'
import "./Footer.css"
import { FOOTER_APPLE_LOGO, FOOTER_GOOGLE_LOGO, TWITTER_ICON, FACEBOOK_ICON } from '../../Assets';
import { FACEBOOK_LINK, TWITTER_LINK, GOOGLE_PLAY_STORE_LINK, APPLE_PLAY_STORE_LINK } from '../../Constants/Constant';

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
            <a href={TWITTER_LINK}><TWITTER_ICON /></a>
            <a href={FACEBOOK_LINK}><FACEBOOK_ICON /></a>
          </div>
        </div>
        <div className='menu right-menu2'>
          <h2>COINCAP APP AVAILABLE ON</h2>
          <div>
            <a href={GOOGLE_PLAY_STORE_LINK}><img src={FOOTER_GOOGLE_LOGO} alt="Google Store" /></a>
            <a href={APPLE_PLAY_STORE_LINK}><img src={FOOTER_APPLE_LOGO} alt="Apple Store" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer