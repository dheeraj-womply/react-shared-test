import React from 'react'
import { ContentPanel } from './index'
import renderer from 'react-test-renderer'

test('Error Panel DOM elements are OK', () => {
    const component = renderer.create(<ContentPanel title={'Womply'} >
        <p>Womply</p>
    </ContentPanel>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
