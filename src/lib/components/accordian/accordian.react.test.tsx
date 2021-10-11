import React from 'react'
import renderer from 'react-test-renderer'
import { AccordianSection } from './'
import { render, fireEvent } from '@testing-library/react';

test('Test snapshot for Accordian component', () => {
    const component = renderer.create(
        <AccordianSection 
            title={'Accordian Title'}>
                <div>div element</div>
        </AccordianSection>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});


test('Test toggle for Accordian component', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
        <AccordianSection 
            toggle={onClick}
            title={'Accordian Title'}>
                <div>child element</div>
        </AccordianSection>
    );
    expect(getByTestId('accordian-title')).toHaveTextContent(/Accordian Title/i)
    expect(getByTestId('accordian-summary')).toHaveTextContent(/child element/i)
    fireEvent.click(getByTestId('accordian-title'));
    expect(onClick).toBeCalled();
});