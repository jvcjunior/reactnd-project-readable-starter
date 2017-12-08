import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DefaultLayout from './layouts/Default';

import Home from './pages/Home.container';
import CategoryPosts from './pages/CategoryPosts.container';
import PostDetail from './pages/PostDetail.container';


const Root = ({ store }) => (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router>
          <div>
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout exact path="/:category" component={CategoryPosts} />
            <DefaultLayout exact path="/:category/:post_id" component={PostDetail} />
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  )

export default Root;