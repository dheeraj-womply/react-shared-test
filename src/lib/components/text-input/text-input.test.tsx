import React from "react"
import renderer from "react-test-renderer"
import { TextInput } from "./index"
import { InputAdornment } from '@material-ui/core'

test('Text Input elements are OK', () => {
    const component = renderer.create(
        <TextInput
            label={'Label text'}
            variant="outlined"
            value={'Input value'}
            fullWidth
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Text Password Input elements are OK', () => {
    const component = renderer.create(
        <TextInput
            label={'Current Password'}
            variant="outlined"
            isPassword={true}
            value={'Input value'}
            fullWidth
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Text Input with error and helper text are OK', () => {
    const component = renderer.create(
      <TextInput
        label={"Current Password"}
        variant="outlined"
        value={"Input value"}
        fullWidth
        inputProps={{
          "data-testid": "text-input",
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">+1</InputAdornment>,
        }}
        helperText={"Required"}
        isPassword={true}
        error={true}
      />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
