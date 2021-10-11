import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'
import { StaticBadge } from '../lib/components'
import { Box, Grid } from '@material-ui/core'

export default {
    title: 'StaticBadge',
    component: StaticBadge,
    decorators: [withKnobs]
}

export const StaticBadgeComponent = () => (
    <Box padding={2}>
        <Grid container spacing={2}>
            <Grid item>
                <StaticBadge badgeContent={number('content',1)} color="default" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content',1)} color="primary" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content',1)} color="secondary" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content',1)} color="error" />
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item>
                <StaticBadge badgeContent={number('content-2', 99)} color="default" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-2', 99)} color="primary" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-2', 99)} color="secondary" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-2', 99)} color="error" />
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item>
                <StaticBadge badgeContent={number('content-3', 100)} max={100} color="default" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-3', 100)} max={100} color="primary" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-3', 100)} max={100} color="secondary" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-3', 100)} max={100} color="error" />
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item>
                <StaticBadge badgeContent={number('content-4', 100)} max={100} color="default.main" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-4', 100)} max={100} color="primary.main" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-4', 100)} max={100} color="secondary.main" />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-4', 100)} max={100} color="error.main" />
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item>
                <StaticBadge badgeContent={number('content-5', 100)} max={100} />
            </Grid>
            <Grid item>
                <StaticBadge badgeContent={number('content-5', 100)} max={100} color="default.main" />
            </Grid>
            <Grid item>
                <StaticBadge
                    badgeContent={number('content-5', 100)}
                    max={100}
                    bgcolor="red"
                    color="#fff"
                />
            </Grid>
            <Grid item>
                <StaticBadge
                    badgeContent={number('content-5', 100)}
                    max={100}
                    bgcolor="purple"
                    color="#fff"
                />
            </Grid>
            <Grid item>
                <StaticBadge
                    badgeContent={number('content-5', 100)}
                    max={100}
                    bgcolor="orange"
                    color="#fff"
                />
            </Grid>
        </Grid>
    </Box>
)