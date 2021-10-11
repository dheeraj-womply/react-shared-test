import React from 'react'
import { select, withKnobs } from '@storybook/addon-knobs'
import { Button } from '../lib/components'
import AdbIcon from '@material-ui/icons/Adb'
import { ThemeProvider } from '@material-ui/core/styles'
import materialTheme from '../lib/themes/material'

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
}

export const DefaultButton = () => {
    return (
        <ThemeProvider theme={materialTheme}>
            <Button
                color={select('Color',  ['primary', 'secondary', 'default'],'secondary')}
                size={select('Size',  ['small', 'medium', 'large'],'medium')}
                variant={select('Variant',  ['text', 'outlined', 'contained'],'outlined')}
            >
                Default Button
            </Button>
        </ThemeProvider>
    )
}

export const ButtonWithStartIcon = () => {
    return (
        <ThemeProvider theme={materialTheme}>
            <Button
                startIcon={<AdbIcon/>}
            >
                With Icon
            </Button>
        </ThemeProvider>
    )
}
