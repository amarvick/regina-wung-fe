import React, { Component, StartupActions } from 'react'
// import { connect } from 'react-redux' 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './main.scss'
// import store from "./js/store"

import Header from './headerfooter/header';
import Footer from './headerfooter/footer';

import Home from './home/main';
import Portfolio from './portfolio/main';
import Resume from './resume/main';
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

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/contact' component={Contact}/>
            <Redirect to="/"/>
          </Switch>

          <footer className="App-footer">
            <Footer/>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;