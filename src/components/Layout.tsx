import React, { ReactChild } from 'react'
import '../styles/index.scss'
import Slider from './Slider'

const Layout = (): JSX.Element => {
  return (
    <div className="main">
      <div className="left">
        <div className="logo-container">
          <img src="assets/logo.svg" />
        </div>
        <div>
          <div className="btn cta">JOIN</div>
        </div>
      </div>
      <div className="body">
        <Slider />
      </div>
    </div>
  )
}

export default Layout
