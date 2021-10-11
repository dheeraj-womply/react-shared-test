import React from 'react'
import renderer from 'react-test-renderer'
import {Button} from "./ui-elements"
import AdbIcon from '@material-ui/icons/Adb'

test('Button', () => {
    const component = renderer.create(
        <Button/>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Button with start icon', () => {
    const component = renderer.create(
        <Button
            startIcon={<AdbIcon/>}
            classes={{
                text: ''
            }}
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
