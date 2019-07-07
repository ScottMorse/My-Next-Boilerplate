import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('App', () => {
  it('Renders without crashing', () => {
    const app = shallow(<App />)
  })
})