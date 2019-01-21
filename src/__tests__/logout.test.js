import React from 'react'
import { render, wait } from 'react-testing-library'

import { Provider } from 'react-redux'

import axios from 'axios'
import { navigate } from '@reach/router'

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))


import Logout from 'components/Logout'

test("Logout button redirects to Home", async () => {
  const { getByText } = render(
    <Logout />
  )

  // await wait(() => { })

  expect(navigate).toHaveBeenCalledTimes(1)
  expect(navigate).toHaveBeenCalledWith('/')
})