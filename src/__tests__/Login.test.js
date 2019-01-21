import React from 'react'
import { render, wait, fireEvent } from 'react-testing-library'

import { Provider } from 'react-redux'

import axios from 'axios'
import { navigate } from '@reach/router'

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

import store from '../redux/store'

import Login from 'components/Login'

beforeEach(() => {
  const localStorageMock = {
    getItem: jest.fn(key => mockStorage[key]),
    setItem: jest.fn((args) => { }),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true
  })
});

test("Login button redirects to Home", async () => {
  const { getByText, queryByText } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  )

  fireEvent.submit(getByText('Login'))

  expect(queryByText("Logging in...")).toBeTruthy()

  await wait(() => expect(queryByText("Logging in...")).not.toBeTruthy())

  expect(navigate).toHaveBeenCalledTimes(1)
  expect(navigate).toHaveBeenCalledWith('/home')

  expect(localStorage.setItem).toHaveBeenCalledTimes(1)

  expect(localStorage.setItem.mock.calls[0][0]).toBe('token')
})