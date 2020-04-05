import React, { Component, StartupActions } from 'react'
// import { connect } from 'react-redux' 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './main.scss'
// import store from "./js/store"

import Header from './headerfooter/header';
import Footer from './headerfooter/footer';

import Home from './home/main';
import About from './about/main';
import Blog from './blog/main';
import Contact from './contact/main';

class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header/>
          </header>

          <div className="App-body">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/blog' component={Blog}/>
              <Redirect to="/"/>
            </Switch>
          </div>

          <footer className="App-footer">
            <Footer/>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;