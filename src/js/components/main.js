import React, { Component, StartupActions } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './main.scss'
import { connect } from 'react-redux';
import { getArticles } from '../actions/articleActions';

import jwt_decode from "jwt-decode";
import setAuthToken from "../../auth/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import store from '../store.js';

import MainHeader from './headerfooter/MainHeader';
import NonMainHeader from './headerfooter/NonMainHeader';
import Footer from './headerfooter/Footer';

import Home from './home/Home';
import Blog from './blog/Blog';
import AdminLogin from './admin/AdminLogin';

if (localStorage.jwtToken) {
  store.dispatch(logoutUser());

  // const token = localStorage.jwtToken;
  // setAuthToken(token);
  // const decoded = jwt_decode(token);
  // store.dispatch(setCurrentUser(decoded));
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   store.dispatch(logoutUser());
  // }
}

class Main extends Component {
  componentWillMount() {
    getArticles();
  }

  render() {
    console.log(this.props.state);
    const header = true ? <MainHeader /> : <NonMainHeader />
    return (
      <BrowserRouter>
        <div className="App">
          { header }
          <div className="App-body">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/blog/:id?' component={Blog}/>
              <Route path='/login' component={AdminLogin}/>
              <Redirect to="/"/>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  getArticles: dispatch(getArticles()),
  startup: () => dispatch(StartupActions.startup())
});

const mapStateToProps = (state) => ({
  state: state,
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);