import React, { useState } from 'react'
import { Grid, InputAdornment } from '@material-ui/core'
import { PhoneInput } from '../lib/components'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from '@material-ui/core/styles'
import materialTheme from '../lib/themes/material'

export default {
    title: 'Phone Text Field',
    component: PhoneInput,
    decorators: [withKnobs]
}

const onChange = action('Value changed')

export const phoneFieldWithoutValue = () => (
    <ThemeProvider theme={materialTheme}>
        <Grid item xs={12} md={4} style={{ padding: 40 }}>
            <PhoneInput 
                fullWidth
                inputProps={{ dataid: '123' }}
                label={text('label', 'Phone Number')}
                onChange={onChange}
            />
        </Grid>
    </ThemeProvider>
)

export const phoneFieldWithValue = () => {
    const [phone, setPhone] = useState('9876895532')
    const handleChange = (event) => {
        setPhone(event.target.value)
        onChange(event)
    }

    return (
        <ThemeProvider theme={materialTheme}>
            <Grid item xs={12} md={4} style={{ padding: 40 }}>
                <PhoneInput
                    fullWidth
                    label={text('label', 'Phone Number')}
                    value={phone}
                    onChange={handleChange}
                />
            </Grid>
        </ThemeProvider>
    )
}

export const phoneFieldWithError = () => (
    <ThemeProvider theme={materialTheme}>
        <Grid item xs={12} md={4} style={{ padding: 40 }}>
            <PhoneInput
                fullWidth
                label={text('label', 'Phone Number')}
                onChange={onChange}
                error={boolean('error', true)}
                helperText={text('helperText', 'The value is invalid')}
            />
        </Grid>
    </ThemeProvider>
)

export const phoneFieldWithVariant = () => (
    <ThemeProvider theme={materialTheme}>
        <Grid item xs={12} md={4} style={{ padding: 40 }}>
            <PhoneInput
                fullWidth
                label={text('label', 'Phone Number')}
                onChange={onChange}
                variant={select('variant', ['filled', 'outlined', 'standard'], 'standard')}
            />
        </Grid>
    </ThemeProvider>
)

export const phoneFieldWithAdornment = () => (
    <ThemeProvider theme={materialTheme}>
        <Grid item xs={12} md={4} style={{ padding: 40 }}>
            <PhoneInput
                fullWidth
                label={text('label', 'Phone Number')}
                onChange={onChange}
                guide
                InputProps={{
                    startAdornment: <InputAdornment position="start">{'(+1)'}</InputAdornment>,
                    placeholder: text('placeholder', '(      )       -   ')
                }}
            />
        </Grid>
    </ThemeProvider>
)
