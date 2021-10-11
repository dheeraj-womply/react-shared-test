import React from 'react'
import renderer from 'react-test-renderer'
import { ProgressLoader } from './index'

test('Progress Loader', () => {
  const component = renderer.create(
    <ProgressLoader/>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})