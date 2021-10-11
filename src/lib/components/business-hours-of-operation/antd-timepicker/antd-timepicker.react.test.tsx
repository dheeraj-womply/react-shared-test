import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { AntdTimepicker } from '.';
import { screen } from '@testing-library/dom'

test('Antd Timepicker component renders as expected', () => {
    const onChange = jest.fn();
    const component = renderer.create(
        <div>
            <AntdTimepicker 
                fieldName={'start'}
                value={new Date()}
                handleDateChange={onChange}
                />
        </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// todo
test('Check if icons are clickable', async () => {
    const onChange = jest.fn();
    const { getByPlaceholderText, container, findByText } = render(
            <AntdTimepicker 
                fieldName={'start'}
                value={new Date()}
                handleDateChange={onChange}
                />
    );
    fireEvent.click(getByPlaceholderText('Select time'));
    //fireEvent.click(screen.getByText(/Now/)!);
});
