import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Tooltip } from './index'

(global as any).document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});


test('check if tooltip message is displayed on hover', async () => {
    const { findByTestId, findByText } = render(
      <Tooltip
        title="Tooltip message on hover"
      >
        <button data-testid="button">button</button>
      </Tooltip>
    )
    fireEvent.mouseOver(await findByTestId('button'))
    expect(await findByText('Tooltip message on hover')).toBeInTheDocument()
})

