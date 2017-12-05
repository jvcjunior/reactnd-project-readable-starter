import React from 'react';
import { createStore, applyMiddleware, compose  } from 'redux'
import { render } from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'

import Root from './Root';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

// then run the saga
sagaMiddleware.run(rootSaga)

render(
    <Root store={store} />,
    document.getElementById('root')
  )

