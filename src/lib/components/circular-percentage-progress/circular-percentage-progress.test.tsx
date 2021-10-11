import React from 'react'
import renderer from 'react-test-renderer'
import {number} from "@storybook/addon-knobs";
import {CircularPercentageProgress} from "./ui-elements";

test('CircularPercentageProgress secondary elements are OK', () => {
    const component = renderer.create(<CircularPercentageProgress value={number('value-secondary', 25)} color="secondary" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('CircularPercentageProgress primary elements are OK', () => {
    const component = renderer.create(<CircularPercentageProgress value={number('value-secondary', 25)} color="primary" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

