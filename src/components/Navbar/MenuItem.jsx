import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuItem = ({item, show, setShow, navItemSpecial, isSubmenuActive}) => {
  const [dropdown, setDropdown] = useState(false)

  


  return (
    <li className={`nav-item ${navItemSpecial ? 'nav-item-special':''}`}>
        {item.submenu ? (
            <>
              <span
                className={`nav-link ${isSubmenuActive ? 'active': ''}`}
                // aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}
              >
                {item.title}
                <ExpandMoreIcon fontSize='small'/>
              </span>
              
              <Dropdown submenus={item.submenu} dropdown={dropdown} show={show} setShow={setShow} />
            </>  
        ):(
            <NavLink  to={item.url} className={`nav-link`} onClick={()=>{setShow(false)}}>{item.title}</NavLink>
        )}
    </li>
  )
}

export default MenuItem