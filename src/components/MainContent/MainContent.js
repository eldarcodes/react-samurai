import React from 'react'
import Profile from '../../pages/Profile/Profile'
import {Route} from 'react-router-dom'
import MessagesContainer from '../../pages/Messages/MessagesContainer'
import Music from '../../pages/Music/Music'
import Settings from '../../pages/Settings/Settings'
import UsersContainer from '../../pages/Users/UsersContainer'

import './MainContent.scss'

const MainContent = props => {
  return (
    <div className="col s10 main_content z-depth-1">
      <Route exact path="/">
        <Profile />
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
