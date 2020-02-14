import React from 'react'
import {Link} from 'react-router-dom'

import './Header.scss'
import logoSVG from '../../assets/react.svg'

const Header = props => {
  return (
    <nav className="header blue z-depth-2 row darken-3">
      <div className="container">
        <Link to="/">
          <img width="50" src={logoSVG} alt="logo" style={{marginTop: 10}} />
        </Link>
        <ul id="nav-mobile" className="right">
          {props.isAuth ? (
            <Link to="/profile">
              <div className="active">{props.login}</div>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn white blue-text waves-effect">
                Login
              </button>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Header
