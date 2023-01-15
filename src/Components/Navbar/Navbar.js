import React, { useState } from 'react'
import "./Navbar.css"
import { ICONS } from "../../Constants/Constant"
import { NAVBAR_LOGO } from "../../Assets"

const { SwapHorizontalCircleIcon, ArrowForwardIcon, LaptopIcon, CurrencyBitcoinIcon, SearchIcon, SettingsIcon, ArrowDropDownIcon, MenuIcon, CloseIcon, SyncAltIcon } = ICONS

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <>
      <UpperNavBar />
      <div className='navbar-container'>
        <div className='search-icon show-only-in-small-devices'><SearchIcon /></div>
        <ul className='navbar-left-options dont-show-in-small-devices'>
          <li><a href="">Coins</a></li>
          <li><a href="">Exchanges</a></li>
          <li><a href="">Swap</a></li>
        </ul>
        <img src={NAVBAR_LOGO} />
        <div className='hamburger-icon show-only-in-small-devices' onClick={toggleSideBar}>{!showSideBar ? <MenuIcon /> : <CloseIcon />}</div>
        <div className='navbar-right-options dont-show-in-small-devices'>
          <div className='flex-center'>USD <ArrowDropDownIcon /></div>
          <div className='flex-center'>English <ArrowDropDownIcon /></div>
          <div><SearchIcon sx={{ fontSize: 18 }} /></div>
          <div><SettingsIcon sx={{ fontSize: 18 }} /></div>
        </div>
      </div>
      <SideBar showSideBar={showSideBar} />
    </>
  )
}

const UpperNavBar = () => {
  return (
    <div className='upper-navbar-container' href="http://bit.ly/3ERzmEc" target="_blank">
      <CurrencyBitcoinIcon sx={{ color: 'white' }} />
      <span>Buy, sell, & swap your favorite assets. No KYC. No added fees. Decentralized.</span>
      <ArrowForwardIcon sx={{ color: 'white' }} />
    </div>
  )
}

const SideBar = ({ showSideBar }) => {
  return (
    <div className={`${showSideBar ? "show-side-bar" : "hide-side-bar"} navbar-side-bar`}>
      <div>
        <SideBarItem OptionIcon={CurrencyBitcoinIcon} name="Coin" />
        <SideBarItem OptionIcon={SyncAltIcon} name="Exchanges" />
        <SideBarItem OptionIcon={SwapHorizontalCircleIcon} name="Swap" />
        <SideBarItem OptionIcon={LaptopIcon} name="API" />
        <SideBarItem OptionIcon={SettingsIcon} name="Settings" />
      </div>
      <div className='connect-wallet-button'><button>Connect Wallet</button></div>
      <div className='flex-between'>
        <span>USD</span>
        <ArrowDropDownIcon />
      </div>
      <div className='flex-between'>
        <span>English</span>
        <ArrowDropDownIcon />
      </div>
    </div>
  )
}

const SideBarItem = ({ OptionIcon, name }) => {
  return (
    <div className='side-bar-item-container'>
      <div><OptionIcon /></div>
      <div>{name}</div>
    </div>
  )
}

export default Navbar