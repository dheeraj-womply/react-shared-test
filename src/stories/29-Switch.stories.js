import { Grid } from "@material-ui/core";
import { Switch } from "../lib/components";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import materialTheme from "../lib/themes/material";
import { ThemeProvider } from '@material-ui/core/styles';

export default {
    title: 'Switch',
    component: Switch,
    decorators: [withKnobs]
}

export const switchUnchecked = () => {
    const disabled = boolean('Disabled', false)

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <ThemeProvider theme={materialTheme}>
            <Grid item xs={12} md={4} style={{ padding: 40 }}>
                <Switch
                    className={disabled ? 'pendo-ref__auto-reply-switch' : undefined}
                    checked={isChecked}
                    onChange={handleChange}
                    disabled={disabled}
                />
            </Grid>
        </ThemeProvider>
    )
};

export const switchChecked = () => {
    const disabled = boolean('Disabled', false)

    const [isChecked, setIsChecked] = useState(true)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <ThemeProvider theme={materialTheme}>
            <Grid item xs={12} md={4} style={{ padding: 40 }}>
                <Switch
                    className={disabled ? 'pendo-ref__auto-reply-switch' : undefined}
                    checked={isChecked}
                    onChange={handleChange}
                    disabled={disabled}
                />
            </Grid>
        </ThemeProvider>
    )
};