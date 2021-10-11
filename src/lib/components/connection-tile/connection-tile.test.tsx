import renderer from 'react-test-renderer'
import React from 'react'
import { ConnectionTile } from './ui-elements'
import { tileDefault1, tileNoIcon, tileError, tileSuccess } from '../../resources/connection-tile.resource'

test('Test snapshot for ConnectionTile Error', () => {
    const component = renderer.create(
        <ConnectionTile tile={tileError} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Test snapshot for ConnectionTile Success', () => {
    const component = renderer.create(
        <ConnectionTile tile={tileSuccess} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Test snapshot for ConnectionTile Default', () => {
    const component = renderer.create(
        <ConnectionTile tile={tileDefault1} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Test snapshot for ConnectionTile Default Without Icon', () => {
    const component = renderer.create(
        <ConnectionTile tile={{...tileNoIcon, icon: ''}} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})