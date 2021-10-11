import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'
import { CircularPercentageProgress } from '../lib/components'
import { Grid } from '@material-ui/core'

export default {
    title: 'Circular Percentage Progress',
    component: CircularPercentageProgress,
    decorators: [withKnobs]
}

export const CircularPercentageProgressComponent = () => (
    <Grid spacing={2} container>
        <Grid item xs={1}>
            <CircularPercentageProgress value={number('value-primary', 45)} color="primary" />
        </Grid>
        <Grid item xs={1}>
            <CircularPercentageProgress value={number('value-secondary', 25)} color="secondary" />
        </Grid>
        <Grid item xs={1}>
            <CircularPercentageProgress value={number('value-default', 100)} color="default" />
        </Grid>
        <Grid item xs={1}>
            <CircularPercentageProgress value={number('value-zero', 0)} color="default" />
        </Grid>
    </Grid>
)