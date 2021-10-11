import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { MaterialPopover } from '.';

test('Test snapshot for Material Popver component when mounting element is not provided', () => {
    const onClose = jest.fn();
    const component = renderer.create(
        <MaterialPopover 
            element={null}
            onClose={onClose}
            />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});
