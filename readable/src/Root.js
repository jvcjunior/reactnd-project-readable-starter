import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DefaultLayout from './layouts/Default';

import Home from './pages/Home.container';
import NewPost from './pages/NewPost';
import CategoryPosts from './pages/CategoryPosts.container';
import PostDetail from './pages/PostDetail.container';


const Root = ({ store }) => (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router>
          <div>
            <DefaultLayout exact path="/" component={Home} title="Posts"/>
            <Switch>
              <DefaultLayout exact path="/add" component={NewPost} title="New Post"/>
              <DefaultLayout exact path="/:category" component={CategoryPosts} title="Posts"/>
            </Switch>
            <DefaultLayout exact path="/:category/:post_id" component={PostDetail} title="Post Details"/>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  )

export default Root;