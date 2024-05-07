import React from 'react'
import { NavLink } from 'react-router-dom'

const Dropdown = ({ menu, submenus, dropdown, show, setShow, }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      <div className="wrapper">
        {submenus.map((submenu, index) =>
          <li key={index} className='nav-item'>
            <NavLink className='nav-link' to={`${submenu.url}`} onClick={() => { setShow(false) }} end>{submenu.title}</NavLink>
          </li>
        )}
      </div>
    </ul>
  )
}

export default Dropdown