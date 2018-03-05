import React from 'react'
import Header from './Header'
import Main from './Main'
import './app.css';

const App = () => (
  <div className="mainDiv">
    <div className="header">
      <Header />
    </div>
    <div className="main">
      <Main />
    </div>
  </div>
)

export default App
