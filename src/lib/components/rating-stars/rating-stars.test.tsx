import React from 'react'
import renderer from 'react-test-renderer'
import { RatingStars } from "./ui-elements"

test('Rating Stars elements are OK', () => {
    const component = renderer.create(<RatingStars value={4.2} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})