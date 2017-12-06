import React from 'react';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose  } from 'redux'
import { render } from 'react-dom'

import rootSaga from './sagas'
import rootReducer from './reducers'
import Root from './Root';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)

render(
    <Root store={store} />,
    document.getElementById('root')
  )

