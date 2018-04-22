import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Route, IndexRoute, Router, hashHistory, browserHistory } from 'react-router'
import Switch from 'react-router-dom/Switch'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import store from './store/index'
import axios from 'axios'
import NotFound from './components/NotFound/NotFound'
import { PostsIndex, PostsEdit, PostsNew, PostsComment, PostsCommentEdit, PostsCommentNew } from './containers/index'

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
  Promise.reject(error)
  return browserHistory.push('/notFound')
})

let App = ({ children }) => {
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
        <Switch>
          <Route path="/notFound" component={NotFound} />
          <Route exact path="/" component={App}>
            <IndexRoute component={PostsIndex} />
            <Route exact path="/:category" component={PostsIndex} />
            <Route exact path="/posts/new" component={PostsNew} />
            <Route exact path="/posts/:postId/edit" component={PostsEdit} />
            <Route exact path="/:category/:postId" component={PostsComment} />
            <Route exact path="/posts/:postId/comment/new" component={PostsCommentNew} />
            <Route exact path="/posts/comment/:commentId/edit" component={PostsCommentEdit} />
          </Route>
          </Switch>
      </Router>
    </Provider>
  )
}
