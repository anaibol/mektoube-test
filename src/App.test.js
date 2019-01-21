import React from 'react'
import { Provider } from 'react-redux'

import { render } from 'react-testing-library'

import App from './App'

import store from './redux/store'


test('renders without crashing', () => {
  render(<Provider store={store}>
    <App />
  </Provider>)
})

