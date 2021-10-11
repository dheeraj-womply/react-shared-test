import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { ConnectionTile } from '../lib/components'
import { tileDefault1, tileNoIcon, tilePending, tileError, tileSuccess } from '../lib/resources/connection-tile.resource'

export default {
    title: 'Tile',
    component: ConnectionTile,
    decorators: [withKnobs]
}

export const TileDefault = () => (
    <div style={{ margin: '2em', width: 200 }}>
        <ConnectionTile tile={object('Default With Icon', tileDefault1)} onClick={action('Tile clicked')} />
    </div>
)

export const TileDefaultWithoutIcon = () => (
    <div style={{ margin: '2em', width: 200 }}>
        <ConnectionTile tile={object('Default Without Icon', tileNoIcon)} onClick={action('Tile clicked')} />
    </div>
)

export const TilePending = () => (
    <div style={{ margin: '2em', width: 200 }}>
        <ConnectionTile tile={object('Pending', tilePending)} onClick={action('Tile clicked')} />
    </div>
)

export const TileError = () => (
    <div style={{ margin: '2em', width: 200 }}>
        <ConnectionTile tile={object('Error', tileError)} onClick={action('Tile clicked')} />
    </div>
)

export const TileSuccess = () => (
    <div style={{ margin: '2em', width: 200 }}>
        <ConnectionTile tile={object('Success', tileSuccess)} onClick={action('Tile clicked')} />
    </div>
)