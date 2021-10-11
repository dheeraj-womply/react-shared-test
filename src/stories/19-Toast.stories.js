import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { action } from '@storybook/addon-actions'
import { text, boolean, select, withKnobs } from '@storybook/addon-knobs'
import { Toast } from '../lib/components'
import muiTheme from '../lib/themes/material'

export default {
    title: 'Toast',
    component: Toast,
    decorators: [withKnobs],
}

const onClose = action('Close Event Handler')

export const informationToast = () => (
    <ThemeProvider theme={muiTheme}>
        <Toast
            open={boolean('open', true)}
            message={text('message', 'This is an information message')}
            severity={select('severity', ['info', 'success', 'error', 'warning'], 'info')}
            variant={select('variant', ['filled', 'outlined', 'standard'], 'filled')}
            action={text('action', 'OK')}
            onClose={onClose}
        />
    </ThemeProvider>
)

export const successToast = () => (
    <ThemeProvider theme={muiTheme}>
        <Toast
            open={boolean('open', true)}
            message={text('message', 'This is a success message')}
            severity={select('severity', ['info', 'success', 'error', 'warning'], 'success')}
            variant={select('variant', ['filled', 'outlined', 'standard'], 'filled')}
            action={text('action', 'OK')}
            onClose={onClose}
        />
    </ThemeProvider>
)

export const errorToast = () => (
    <ThemeProvider theme={muiTheme}>
        <Toast
            open={boolean('open', true)}
            message={text('message', 'This is an error message')}
            severity={select('severity', ['info', 'success', 'error', 'warning'], 'error')}
            variant={select('variant', ['filled', 'outlined', 'standard'], 'filled')}
            action={text('action', 'OK')}
            onClose={onClose}
        />
    </ThemeProvider>
)

export const warningToast = () => (
    <ThemeProvider theme={muiTheme}>
        <Toast
            open={boolean('open', true)}
            message={text('message', 'This is a warning message')}
            severity={select('severity', ['info', 'success', 'error', 'warning'], 'warning')}
            variant={select('variant', ['filled', 'outlined', 'standard'], 'filled')}
            action={text('action', 'OK')}
            onClose={onClose}
        />
    </ThemeProvider>
)
