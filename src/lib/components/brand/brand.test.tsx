import React from 'react'
import { Logo } from './index'
import renderer from 'react-test-renderer'

test('Logo DOM elements are OK', () => {
    const component = renderer.create(<Logo alt="Womply" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
