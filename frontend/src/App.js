import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Switch from 'react-router-dom/Switch'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import store from './store/index'
import axios from 'axios'
import NotFound from './components/NotFound/NotFound'

import {
  PostsIndex,
  PostsEdit,
  PostsNew,
  PostsComment,
  PostsCommentEdit,
  PostsCommentNew
} from './containers/index'

require('./app.scss')

const history = syncHistoryWithStore(browserHistory, store)

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

window.instanceAxios = axios.create({
  baseURL: process.env.REACT_APP_READABLE_API || 'http://localhost:3030',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
  }
})

window.instanceAxios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(error.response)
  return browserHistory.push('/notFound')
})

window.pathCallback = '/'

browserHistory.listen(location => {
  if (location.hash) {
    browserHistory.push('/notFound')
    return
  }
});

const App = ({ children }) => {
  return (
    <div>
      <Navbar>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem >Posts</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="">
            <NavItem id="navItemComments" disabled={true}>Comments</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/notFound" component={NotFound} />
        <Route exact path="/" component={App}>
          <IndexRoute component={PostsIndex} />
          <Route path="posts/new" component={PostsNew} />
          <Route path="posts/:postId/edit" component={PostsEdit} />
          <Route path=":category" component={PostsIndex} />
          <Route path=":category/:postId" component={PostsComment} />
          <Route path=":category/:postId/comment/new" component={PostsCommentNew} />
          <Route path=":category/comment/:commentId/edit" component={PostsCommentEdit} />
          <Route component={NotFound} />
        </Route>
      </Router>
    </Provider>
  )
}
