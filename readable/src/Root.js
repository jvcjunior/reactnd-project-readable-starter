import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Posts from './components/Posts.container';
import DefaultLayout from './layouts/Default';

const Root = ({ store }) => (
    <Provider store={store}>
      <Router>
        <DefaultLayout path="/" component={Posts} />
      </Router>
    </Provider>
  )

export default Root;