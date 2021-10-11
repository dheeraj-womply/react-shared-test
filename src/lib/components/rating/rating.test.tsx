import React from 'react'
import { render } from '@testing-library/react';
import { Rating } from './index'

test('Rating with all values enabled', () => {
  const { getByTestId } = render(<Rating
    total={5}
    count={4.2}
    size="1rem"
    gap={8}
    primaryColor="#DD4027"
    secondaryColor="#C6D0D4"
    onClick={() => console.log('Rated')}
  />)

  const starComponent = getByTestId('starComponent')
  expect(starComponent).toBeInTheDocument()
})

test('Rating with default values', () => {
  const { getByTestId } = render(<Rating
    count={4.2}
    gap={8}
  />)

  const starComponent = getByTestId('starComponent')
  expect(starComponent).toBeInTheDocument()
})
