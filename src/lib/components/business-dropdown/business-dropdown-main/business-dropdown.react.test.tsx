import React from 'react'
import renderer from 'react-test-renderer'
import { BusinessDropdown } from './index'
import { businessDropdown as businessDropdownItems } from '../../../resources/business-dropdown-resource'
import { render, fireEvent } from '@testing-library/react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { BusinessLocation } from '../interfaces'

const businessDropdown: BusinessLocation[]  = businessDropdownItems.slice() as any
const slug = 'authentic-plaster-and-til-ccpm'
const activeLocation = businessDropdown.find((item: BusinessLocation) => slug === item.slug) || businessDropdown[0]

test('Test snapshot for BusinessDropdown', () => {
    const component = renderer.create(
        <BusinessDropdown  handleChange={() => {}} data={{businessDropdown, activeLocation}}/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Test BusinessDropdown Select', async () => {
    const changeHandler = jest.fn()
    const {
        getByText,
        getByTestId,
        getByRole
    } = render(
        <Select
            value={activeLocation}
            data-testid='select'
            inputProps={{
                name: "age",
                id: "demo-controlled-open-select",
                "data-testid": "select-input"
            }}
            onChange={changeHandler}
        >
            {businessDropdown.map((item: any, index: number) => {
                return (<MenuItem key={index} value={item}>
                    {item.name}: {item.address.address1}
                    {item.address.city ? <span>&nbsp;{item.address.city} </span> : null}
                    {item.address.state ? <span>&nbsp;{item.address.state} </span> : null}
                    {item.address.zip ? <span>&nbsp;{item.address.zip} </span> : null}
                </MenuItem>)
            })}
        </Select>
    )

    const button = getByRole('button')
    expect(button).toHaveTextContent(/AUTHENTIC PLASTER AND TIL: 1775 NORTHFORK LANE LUCAS TX 75002-0000/i)

    const selectNode = getByTestId("select-input")
    const selectButton = getByRole("button")
    expect(selectButton).not.toBeNull()
    expect(selectNode).not.toBeNull()

    fireEvent.mouseDown(selectButton)
    const itemClickable = getByText(/ORLEANS AUTO CENTER/i)
    fireEvent.click(itemClickable)
    expect(changeHandler).toHaveBeenCalled()
})