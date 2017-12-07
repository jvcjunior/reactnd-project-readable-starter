import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Posts from './components/Posts.container';
import DefaultLayout from './layouts/Default';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = ({ store }) => (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router>
          <DefaultLayout path="/" component={Posts} />
        </Router>
      </MuiThemeProvider>
    </Provider>
  )

export default Root;