import React, { Component } from 'react'
import { BrowserRouter } from  'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Content from './container/Content'

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
          <div id="wrapper"> 
            <Sidebar/>
            <div id="page-wrapper" className="gray-bg dashbard-1">
              <Header/>
              <Content/>
              <Footer/>
            </div>
          </div>
      </BrowserRouter>
      </div>
    )
  }
}
