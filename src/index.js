import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import store from './redux/state'
import {BrowserRouter} from 'react-router-dom'

let rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} dispatch={store.dispatch.bind(store)} state={state} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
