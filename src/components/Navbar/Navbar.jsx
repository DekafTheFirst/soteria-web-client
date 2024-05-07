import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { menuItemsData } from './menuItemsData';
import MenuItem from './MenuItem';
import './Navbar.css'
import { AccountCircleRounded, ArrowDropDown } from '@mui/icons-material/';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../context/AuthContext';
// const routes = [
//   { name: "home", path: "/", component: <Home /> }
// ]


const Navbar = ({ scrolled }) => {
  // console.log(scrolled)
  const [show, setShow] = useState(false);
  const location = useLocation();
  const [toggleUserAuthdropdown, setToggleUserAuthDropdown] = useState(false)

  console.log(toggleUserAuthdropdown)
  const isHomepageActive = location.pathname === "/";


  const checkIfSubmenuIsActive = (menu) => {
    if (location.pathname.includes(menu.url) && menu.url !== "/") {
      return true
    }
    else {
      return false
    }
  }

  const toggleShow = () => {
    setShow(!show)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.navbar')) {
        setShow(false); // Close the navbar if clicked outside
      }
    };

    // Add event listener when component mounts
    document.addEventListener('click', handleOutsideClick);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };

  }, []);


  const { currentUser } = useAuth()
  console.log(currentUser)

  const username = "SoteriaUser";
  return (
    <nav className={`navbar navbar-expand-md fixed-top navbar-dark ${scrolled ? 'scrolled bg-dark' : ''} ${isHomepageActive ? 'home-page-is-active' : ''} `}>
      {/* <div className={`info ${scrolled ? 'scrolled' : ''}`}>
        <div className="item">
          <PlaceIcon className='icon' />
          <span className='details'>Ralph Shodeinde Street, Central Business District.</span>
        </div>
        <div className="item">
          <Email className='icon' />
          <a href="mailto:recipient@example.com" className='details'>dekeji1@gmail.com</a>
        </div>
      </div> */}
      <Link className="navbar-brand logo" to="/" onClick={() => setShow(false)}><img src="/assets/soteria-logo.png" alt="" /></Link>
      <div className="navbar-container">

        <button className="navbar-toggler" type="button" onClick={toggleShow}>
          <span className="navbar-toggler-icon my-navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            {menuItemsData.map((menu, index) => {
              return (
                <MenuItem item={menu} key={index} show={show} setShow={setShow} navItemSpecial={menu.navItemSpecial} isSubmenuActive={checkIfSubmenuIsActive(menu)} />
              )
            })}

          </ul>
          <div className="right">
              {/* {currentUser ?
                <div className='user-auth'>
                  <div className="preview" onClick={() => setToggleUserAuthDropdown((prev) => !prev)}>
                    <img src="/assets/profile-picture.jpg" />
                    <span className='username'>{username}</span>
                    <ArrowDropDown className='dropdown-icon' fontSize='small' />
                  </div>
                  <div className={`user-auth-dropdown ${toggleUserAuthdropdown ? 'show' : ''}`}>
                    <div className="wrapper">
                      <div className="links">
                        <Link className="item">
                          <div className="icon-wrapper">
                            <ManageAccountsIcon className='icon' />
                          </div>
                          <span className='title'>Edit Profile</span>
                          <KeyboardArrowRightIcon className='right-arrow' fontSize='large' />
                        </Link>
                        <Link className="item">
                          <div className="icon-wrapper">
                            <LogoutIcon className='icon' fontSize='large' />
                          </div>
                          <span className='title'>Logout</span>
                          <KeyboardArrowRightIcon className='right-arrow' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="nav-item auth-nav-item">
                  <NavLink to="/login" className="nav-link">
                    Sign In
                  </NavLink>
                </div>
                } */}
            <li className="nav-item-special">
              <NavLink className="nav-link-special" to="https://www.paypal.com/us/home" onClick={() => { setShow(false) }}>Give</NavLink>
            </li>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar