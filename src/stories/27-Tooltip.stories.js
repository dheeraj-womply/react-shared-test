import React, { useState } from 'react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { ThemeProvider } from '@material-ui/core'
import materialTheme from '../lib/themes/material'
import { Tooltip } from '../lib/components/tooltip'
import styled from 'styled-components'

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [withKnobs],
}

const Text = styled.span`
  color: white;
  background-color: blue;
`

const Container = styled.div`
  display: flex; 
  justify-content: center;
  flex: 1;
  height: 100vh;
  align-items: center;
`

export const tooltipHover = () => {
  const arrow = boolean('arrow', true)
  const placement = select(
    'placement', 
    [
      'center',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'left-start',
      'left',
      'left-end',
      'bottom-start',
      'bottom',
      'bottom-end'
    ], 
    'right'
  )

  return (
    <ThemeProvider theme={materialTheme}>
      <Container>
        <Tooltip title="Tooltip text" arrow={arrow} placement={placement}>
          <Text>hover over to see the tooltip</Text>
        </Tooltip>
      </Container>
    </ThemeProvider>
  )
}

export const tooltipClick = () => {
  const arrow = boolean('arrow', true)
  const placement = select(
    'placement', 
    [
      'center',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'left-start',
      'left',
      'left-end',
      'bottom-start',
      'bottom',
      'bottom-end'
    ], 
    'right'
  )
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  return (
    <ThemeProvider theme={materialTheme}>
      <Container>
        <Tooltip title="Tooltip text" arrow={arrow} placement={placement} open={open} onClose={handleTooltipClose}>
          <Text onClick={handleTooltipOpen}>click to see the tooltip</Text>
        </Tooltip>
      </Container>
    </ThemeProvider>
  )
}
