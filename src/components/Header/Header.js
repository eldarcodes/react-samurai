import React from 'react'
import {Link} from 'react-router-dom'

import logoSVG from '../../assets/react.svg'

const Header = props => {
  return (
    <nav className="blue z-depth-2 row darken-3">
      <div className="container">
        <Link to="/">
          <img width="50" src={logoSVG} alt="logo" style={{marginTop: 10}} />
        </Link>
      </div>
    </nav>
  )
}

export default Header
