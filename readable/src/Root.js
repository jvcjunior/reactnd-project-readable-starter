import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DefaultLayout from './layouts/Default';

import Home from './pages/Home.container';
import CategoryPosts from './pages/CategoryPosts.container';


const Root = ({ store }) => (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router>
          <div>
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout path="/:category" component={CategoryPosts} />
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  )

export default Root;