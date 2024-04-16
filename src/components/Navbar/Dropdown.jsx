import React from 'react'
import { NavLink } from 'react-router-dom'

const Dropdown = ({ submenus, dropdown, show, setShow, }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      <div className="wrapper">
        {submenus.map((submenu, index) =>
          <li key={index} className='nav-item'>
            <NavLink 
            // style={({isActive})=> {setIsActive((prev)=> {
            //   if(prev !== true) {
            //     return true
            //   }
            // })}} 
            className='nav-link' to={`/services/${submenu.url}`} onClick={() => { setShow(false) }}>{submenu.title}</NavLink>
          </li>
        )}
      </div>

    </ul>
  )
}

export default Dropdown