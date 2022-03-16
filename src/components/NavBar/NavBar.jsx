import './NavBar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData'

export default function NavBar({ user, setUser }) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }


  return (
    <>
      <div className="navbar">
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <img className='logo' src='https://i.imgur.com/8xsHYA2.png' alt="img" width="150" height="100" />
        <Link onClick={handleLogOut} to="" className="button btn-sm">
          Log Out <FaIcons.FaSignOutAlt />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to='#' className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
}
