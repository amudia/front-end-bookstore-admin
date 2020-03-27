import React, { Component } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Content from './container/Content'

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
          <div id="wrapper"> 
            <Sidebar/>
            <div id="page-wrapper" className="gray-bg dashbard-1">
              <Header/>
              <Content/>
              <Footer/>
            </div>
          </div>
      </Router>
      </div>
    )
  }
}
