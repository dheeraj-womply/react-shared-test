import renderer from "react-test-renderer";
import React from "react";
import { FormErrorMessage } from "./index";

test('Form Error Message are OK', () => {
    const component = renderer.create(
        <FormErrorMessage
            errorMessage="Error message"
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
