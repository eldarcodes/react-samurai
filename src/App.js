import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

import Header from './components/Header/Header'
import Content from './components/Content/Content'

const App = props => {
  return (
    <>
      <Header />
      <Content
        store={props.store}
        dispatch={props.dispatch}
        posts={props.state.profilePage.posts}
        messages={props.state.messagesPage.messages}
        contacts={props.state.messagesPage.contacts}
      />
    </>
  )
}

export default App
