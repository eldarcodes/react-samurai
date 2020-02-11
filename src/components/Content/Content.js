import React from 'react'

import SideNav from '../SideNav/SideNav'
import MainContent from '../MainContent/MainContent'

import './Content.scss'

const Content = props => {
  return (
    <div className="container">
      <div className="row">
        <SideNav />
        <MainContent />
      </div>
    </div>
  )
}

export default Content
