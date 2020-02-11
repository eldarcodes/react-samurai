import React from 'react'
import {Route} from 'react-router-dom'

import MessagesContainer from '../../pages/Messages/MessagesContainer'
import Music from '../../pages/Music/Music'
import Settings from '../../pages/Settings/Settings'
import UsersContainer from '../../pages/Users/UsersContainer'
import ProfileContainer from './../../pages/Profile/ProfileContainer'

import './MainContent.scss'

const MainContent = props => {
  return (
    <div className="col s10 main_content z-depth-1">
      <Route path="/profile">
        <ProfileContainer />
      </Route>
      <Route path="/messages">
        <MessagesContainer />
      </Route>
      <Route path="/users">
        <UsersContainer />
      </Route>
      <Route path="/music">
        <Music />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </div>
  )
}

export default MainContent
