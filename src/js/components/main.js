import React, { Component, StartupActions } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './main.scss'
import { connect } from 'react-redux';
import { getArticles } from '../actions/articleActions';
import { getBlogPosts } from '../actions/blogActions';
import { getComments } from '../actions/commentActions';

import MainHeader from './headerfooter/MainHeader';
import NonMainHeader from './headerfooter/NonMainHeader';
import Footer from './headerfooter/Footer';

import Home from './home/Home';
import Blog from './blog/Blog';

class Main extends Component {
  componentWillMount() {
    getArticles();
    getBlogPosts();
    getComments();
  }

  render() {
    const header = true ? <MainHeader /> : <NonMainHeader />
    return (
      <BrowserRouter>
        <div className="App">
          { header }
          <div className="App-body">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/blog/:id?' component={Blog}/>
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
  getBlogPosts: dispatch(getBlogPosts()),
  getComments: dispatch(getComments()),
  startup: () => dispatch(StartupActions.startup())
});

const mapStateToProps = (state) => ({
  state: state,
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);