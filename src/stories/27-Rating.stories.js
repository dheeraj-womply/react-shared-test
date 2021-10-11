import React from 'react'
import { number, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Rating } from '../lib/components'
import { Box } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import materialTheme from '../lib/themes/material'
import { ERROR_MAIN_COLOR, RATING_SECONDARY_COLOR } from '../lib/themes/default-styles'

export default {
  title: 'Rating',
  component: Rating,
  decorators: [withKnobs]
}

export const rating = () => {
  const total = number('total', 5)
  const count = number('count', 4.2)
  const size = text('size', '1rem')
  const gap = number('gap', 16)
  const primaryColor = text('primaryColor', ERROR_MAIN_COLOR)
  const secondaryColor = text('secondaryColor', RATING_SECONDARY_COLOR)
  const onChange = action('Rating clicked')

  return (
    <ThemeProvider theme={materialTheme}>
      <Box padding={2}>
        <Rating
          total={total}
          count={count}
          size={size}
          gap={gap}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          onClick={onChange}
        />
      </Box>
    </ThemeProvider>
  )
}
