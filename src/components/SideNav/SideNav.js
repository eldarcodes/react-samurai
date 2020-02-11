import React from 'react'
import {NavLink} from 'react-router-dom'

import './SideNav.scss'

const SideNav = () => {
  const links = [
    {
      name: 'Profile',
      path: '/profile'
    },
    {
      name: 'Messages',
      path: '/messages'
    },
    {
      name: 'Users',
      path: '/users'
    },
    {
      name: 'Music',
      path: '/music'
    },
    {
      name: 'Settings',
      path: '/settings'
    }
  ]

  return (
    <div className="col s2 side-nav">
      {links.map((item, i) => {
        return (
          <NavLink
            key={i}
            to={item.path}
            exact
            className="waves-effect waves-light btn light-blue accent-4"
          >
            {item.name}
          </NavLink>
        )
      })}
    </div>
  )
}

export default SideNav
