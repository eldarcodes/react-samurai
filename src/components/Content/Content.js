import React from 'react'

import './Content.scss'

import SideNav from '../SideNav/SideNav'
import MainContent from '../MainContent/MainContent'

const Content = props => {
  return (
    <div className="container">
      <div className="row">
        <SideNav />
        <MainContent
          store={props.store}
          dispatch={props.dispatch}
          posts={props.posts}
          messages={props.messages}
          contacts={props.contacts}
        />
      </div>
    </div>
  )
}

export default Content
