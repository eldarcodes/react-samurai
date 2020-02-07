import React from 'react'
import Profile from '../../pages/Profile/Profile'
import {Route} from 'react-router-dom'
import Messages from '../../pages/Messages/Messages'
import Music from '../../pages/Music'
import Settings from '../../pages/Settings'

import './MainContent.scss'

const MainContent = props => {
  return (
    <div className="col s10 main_content z-depth-1">
      <Route exact path="/">
        <Profile
          store={props.store}
          dispatch={props.dispatch}
          posts={props.posts}
        />
      </Route>
      <Route path="/messages">
        <Messages
          store={props.store}
          dispatch={props.dispatch}
          messages={props.messages}
          contacts={props.contacts}
        />
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
