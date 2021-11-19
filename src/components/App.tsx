import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Layout from './Layout'

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
