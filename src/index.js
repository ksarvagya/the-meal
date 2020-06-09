import React from 'react'
import ReactDOM from 'react-dom'
import './style'

import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'

import store from './store'

const rootEl = document.getElementById('root')

ReactDOM.render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), rootEl)
