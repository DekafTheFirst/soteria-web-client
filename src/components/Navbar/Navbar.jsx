import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { menuItemsData } from './menuItemsData';
import MenuItem from './MenuItem';
import './Navbar.css'
// const routes = [
//   { name: "home", path: "/", component: <Home /> }
// ]


const Navbar = ({ scrolled }) => {
  // console.log(scrolled)
  const [show, setShow] = useState(false);
  const location = useLocation();
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

  return (
    <nav className={`navbar navbar-expand-md fixed-top navbar-dark ${scrolled ? 'scrolled bg-dark' : ''}`}>
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
      <div className="container-fluid">
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
            {/* <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => { setShow(false) }}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/company" className="nav-link" onClick={() => { setShow(false) }}>Company</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className="nav-link" onClick={() => { setShow(false) }}>Services</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" onClick={() => { setShow(false) }}>Projects</NavLink>
            </li> */}


          </ul>
          <li className="nav-item nav-item-special">
            <NavLink className="nav-link" to="/contact" onClick={() => { setShow(false) }}>Contact</NavLink>
          </li>
        </div>

      </div>
    </nav>
  )
}

export default Navbar