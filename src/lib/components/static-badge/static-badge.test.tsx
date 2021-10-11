import React from 'react'
import renderer from 'react-test-renderer'
import {StaticBadge} from "./ui-elements";
import {number} from "@storybook/addon-knobs";

test('Static Badge DOM elements are OK', () => {
    const component = renderer.create(<StaticBadge color="default" badgeContent={100} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Static Badge with bg color DOM elements are OK', () => {
    const component = renderer.create(<StaticBadge
        badgeContent={number('content-5', 100)}
        max={100}
        bgcolor="purple"
        color="#fff"
    />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

