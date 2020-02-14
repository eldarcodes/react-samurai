import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

import HeaderContainer from './components/Header/HeaderContainer'
import Content from './components/Content/Content'

const App = props => {
  return (
    <>
      <HeaderContainer />
      <Content />
    </>
  )
}

export default App
