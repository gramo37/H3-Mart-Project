import React from 'react'
import "./Navbar.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { NAVBAR_LOGO } from "../../Assets"
const Navbar = () => {
  return (
    <>
      <UpperNavBar />
      <div className='navbar-container'>
        <ul className='navbar-left-options'>
          <li><a href="">Coins</a></li>
          <li><a href="">Exchanges</a></li>
          <li><a href="">Swap</a></li>
        </ul>
        <img src={NAVBAR_LOGO} />
        <div className='navbar-right-options flex-center'>
          <div className='flex-center'>USD <ArrowDropDownIcon /></div>
          <div className='flex-center'>English <ArrowDropDownIcon /></div>
          <div><SearchIcon sx={{ fontSize: 18 }} /></div>
          <div><SettingsIcon sx={{ fontSize: 18 }} /></div>
        </div>
      </div>
    </>
  )
}

const UpperNavBar = () => {
  return (
    <div href="http://bit.ly/3ERzmEc" target="_blank" className='upper-navbar-container flex-center'>
      <CurrencyBitcoinIcon sx={{ color: 'white' }} />
      <span>Buy, sell, & swap your favorite assets. No KYC. No added fees. Decentralized.</span>
      <ArrowForwardIcon sx={{ color: 'white' }} />
    </div>
  )
}

export default Navbar