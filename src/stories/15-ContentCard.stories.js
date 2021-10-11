import React from 'react'
import { withKnobs, object, text } from "@storybook/addon-knobs"
import { ContentCard } from "../lib/components"
import { Grid, TextField } from "@material-ui/core"

export default {
    title: 'Content Card',
    component: ContentCard,
    decorators: [withKnobs]
}

const Content = () => {
    const data = object("Input Data",{
        first : {
            type: 'text',
            label: 'First field label',
            value : "Change this value from knob object",
            disabled: false
        },
        second : {
            type: 'number',
            label: 'Second field label',
            value : "9890979089",
            disabled: false
        }
    })

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    label={data.first.label}
                    type={data.first.type}
                    value={data.first.value}
                    disabled={data.first.disabled}
                    style={{minWidth: '100%'}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label={data.second.label}
                    type={data.second.type}
                    value={data.second.value}
                    disabled={data.second.disabled}
                    style={{minWidth: '100%'}}
                />
            </Grid>
        </Grid>
    )
}

export const withTitle = () => {
    const title = text("Title", "Overview")
    return (
        <div style={{padding: 70}}>
            <ContentCard title={title}>
                <Content />
            </ContentCard>
        </div>
    );
}

export const withoutTitle = () => {
    return (
        <div style={{padding: 70}}>
            <ContentCard>
                <Content />
            </ContentCard>
        </div>
    );
}