import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import DefaultLayout from './layouts/Default';

const Root = ({ store }) => (
    <Provider store={store}>
      <Router>
        <DefaultLayout path="/" component={App} />
      </Router>
    </Provider>
  )

export default Root;