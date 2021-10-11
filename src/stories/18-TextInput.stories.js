import React from 'react'
import { text, boolean, withKnobs } from "@storybook/addon-knobs";
import { Grid } from "@material-ui/core";
import { TextInput } from "../lib/components";

export default {
    title: 'Text and Password Inputs',
    component: TextInput,
    decorators: [withKnobs]
}

export const inputWithoutValue = () => (
    <Grid item xs={12} md={4} style={{ padding: 40 }}>
        <TextInput
            label={text('Label', 'Label text')}
            fullWidth
        />
    </Grid>
);

export const inputWithValue = () => (
    <Grid item xs={12} md={4} style={{ padding: 40 }}>
        <TextInput
            label={text('Label', 'Label text')}
            defaultValue="Input value"
            fullWidth
        />
    </Grid>
);

export const inputWithError = () => (
    <Grid item xs={12} md={4} style={{ padding: 40 }}>
        <TextInput
            label={text('Label', 'Label text')}
            helperText={text('Helper text', 'Required')}
            error={boolean('Is error', true)}
            fullWidth
        />
    </Grid>
);

export const passwordInputWithoutValue = () => (
    <Grid item xs={12} md={4} style={{ padding: 40 }}>
        <TextInput
            label={text('Label', 'Current Password')}
            isPassword={boolean('Is password', true)}
            fullWidth
        />
    </Grid>
);

export const passwordInputWithValue = () => (
    <Grid item xs={12} md={4} style={{ padding: 40 }}>
        <TextInput
            label={text('Label', 'Current Password')}
            isPassword={boolean('Is password', true)}
            defaultValue="womply12345"
            fullWidth
        />
    </Grid>
);

export const passwordInputWithDataAttributes = () => (
    <Grid item xs={12} md={4} style={{ padding: 40 }}>
        <TextInput
            label={text('Label', 'Current Password')}
            isPassword={boolean('Is password', true)}
            defaultValue="womply12345"
            fullWidth
            inputProps={{'data-testid': text('Input-attribute', 'current-password-input')}}
            inputBtnProps={{'data-testid': text('Button-attribute', 'current-password-btn')}}
        />
    </Grid>
);

export const passwordInputWithError = () => (
    <Grid item xs={12} md={4} style={{ padding: 40 }}>
        <TextInput
            label={text('Label', 'Current Password')}
            helperText={text('Helper text', 'Required')}
            isPassword={boolean('Is password', true)}
            fullWidth
            error={boolean('Is error', true)}
        />
    </Grid>
);
