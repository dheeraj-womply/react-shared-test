import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Overlay } from '../lib/components'
import { Box, Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'

export default {
    title: 'Overlay',
    component: Overlay,
    decorators: [withKnobs]
}

export const OverlayDefault = () => (
    <Box padding={2}>
        <Overlay show={boolean('show', true)}>
            <Grid container justify="center" alignItems="center" style={{ backgroundColor: 'blue', height: 200 }}>
                <Grid item>
                    <Button color="secondary" variant="contained" onClick={action('Button clicked')}>CLICK ME</Button>
                </Grid>
            </Grid>
        </Overlay>
    </Box>
)

export const OverlaySetSpinnerPosition = () => (
    <Box padding={2}>
        <Overlay
            show={boolean('show', true)}
            allowUserActions={boolean('allowUserActions', false)}
            hideSpinner={boolean('hideSpinner', false)}
            spinnerTop={text('spinnerTop', '25%')}
        >
            <Grid container justify="center" alignItems="center" style={{ backgroundColor: 'blue', height: 200 }}>
                <Grid item>
                    <Button color="secondary" variant="contained" onClick={action('Button clicked')}>CLICK ME</Button>
                </Grid>
            </Grid>
        </Overlay>
    </Box>
)

export const OverlayHideSpinner = () => (
    <Box padding={2}>
        <Overlay
            show={boolean('show', true)}
            allowUserActions={boolean('allowUserActions', false)}
            hideSpinner={boolean('hideSpinner', true)}
            spinnerTop={text('spinnerTop', '50%')}
        >
            <Grid container justify="center" alignItems="center" style={{ backgroundColor: 'blue', height: 200 }}>
                <Grid item>
                    <Button color="secondary" variant="contained" onClick={action('Button clicked')}>CLICK ME</Button>
                </Grid>
            </Grid>
        </Overlay>
    </Box>
)

export const OverlayAllowActions = () => (
    <Box padding={2}>
        <Overlay
            show={boolean('show', true)}
            allowUserActions={boolean('allowUserActions', true)}
            hideSpinner={boolean('hideSpinner', false)}
            spinnerTop={text('spinnerTop', '50%')}
        >
            <Grid container justify="center" alignItems="center" style={{ backgroundColor: 'blue', height: 200 }}>
                <Grid item>
                    <Button color="secondary" variant="contained" onClick={action('Button clicked')}>CLICK ME</Button>
                </Grid>
            </Grid>
        </Overlay>
    </Box>
)

export const OverlaySetSpinnerPositionAndAllowActions = () => (
  <Box padding={2}>
      <Overlay
          show={boolean('show', true)}
          allowUserActions={boolean('allowUserActions', true)}
          hideSpinner={boolean('hideSpinner', false)}
          spinnerTop={text('spinnerTop', '75%')}
      >
          <Grid container justify="center" alignItems="center" style={{ backgroundColor: 'blue', height: 200 }}>
              <Grid item>
                  <Button color="secondary" variant="contained" onClick={action('Button clicked')}>CLICK ME</Button>
              </Grid>
          </Grid>
      </Overlay>
  </Box>
)