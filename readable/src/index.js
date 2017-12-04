import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom'
import Root from './Root';

let store = createStore(() => {
    return {

    };
})

render(
    <Root store={store} />,
    document.getElementById('root')
  )

