import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Dropdown, DropdownOption } from "./index";

describe('Dropdown component testing', () => {
  test('it should render the component', () => {
    render(<Dropdown options={[]} value={''} onChange={jest.fn()} label={'Dropdown label'} labelId={'test-123'} />)

    expect(screen.getByTestId('dropdown-container')).toBeVisible()
  })

  test('it should change the value', () => {
    const onChange = jest.fn()
    const options: DropdownOption[] = [
      { title: 'Test1', value: 'test1' },
      { title: 'Test2', value: 'test2' },
    ]
    render(<Dropdown options={options} value={''} onChange={onChange} label={'Dropdown label'} labelId={'test-234'} />)

    setTimeout(() => {
      fireEvent.focus(screen.getByTestId('dropdown-container'))
      fireEvent.click(screen.getByTestId('dropdown-testid-test1'))
      expect(onChange).toHaveBeenCalled()
    }, 100)
  })
})
