import React from 'react'
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs'
import { Pagination } from '../lib/components'
import { Box } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import materialTheme from '../lib/themes/material'

export default {
    title: 'Pagination',
    component: Pagination,
    decorators: [withKnobs]
}

export const PaginationComponent = () => {
  const count = number('count', 10)
  const showFirstButton = boolean('showFirstButton', true)
  const showLastButton = boolean('showLastButton', true)
  const hideNextButton = boolean('hideNextButton', false)
  const hidePrevButton = boolean('hidePrevButton', false)
  const variant = select('variant', ['outlined', 'text'], 'outlined')
  const shape = select('shape', ['round', 'rounded'], 'rounded')
  const color = select('color', ['primary', 'secondary', 'standard'], 'primary')

  return (
    <ThemeProvider theme={materialTheme}>
      <Box padding={2}>
        <Pagination 
          count={count}
          showFirstButton={showFirstButton}
          showLastButton={showLastButton}
          hideNextButton={hideNextButton}
          hidePrevButton={hidePrevButton}
          variant={variant}
          shape={shape}
          color={color} />
      </Box>
    </ThemeProvider>
  )
}