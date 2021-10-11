import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TabPanel from '@material-ui/lab/TabPanel'
import { Tabs } from '.'

describe('Tabs component testing', () => {

  test('it should change the active tab', () => {
    const handleChange = jest.fn()
    render(
      <Tabs
        value="1"
        onChange={handleChange}
        tabs={[
          { label: 'Tab1', value: '1' },
          { label: 'Tab2', value: '2' },
        ]}
      >
        <>
          <TabPanel value="1">TabPanel1</TabPanel>
          <TabPanel value="2">TabPanel2</TabPanel>
        </>
      </Tabs>
    )
    fireEvent.click(screen.getByTestId('tab-2'))
    expect(handleChange).toHaveBeenCalled()
  })
})
