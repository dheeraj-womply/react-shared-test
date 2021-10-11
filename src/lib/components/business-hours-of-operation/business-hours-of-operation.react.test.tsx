import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BusinesHoursOfOperation } from '.';
import { IBusinessDaysOfWeek } from './interfaces';
import { screen } from '@testing-library/dom'

const days:Array<IBusinessDaysOfWeek> = [
    {day: 'MONDAY', openTime: '07:00 AM', closeTime: '03:00 PM'},
    {day: 'MONDAY', openTime: '04:00 PM', closeTime: '07:00 PM'},
    {day: 'TUESDAY', openTime: '07:00 AM', closeTime: '03:00 PM'},
    {day: 'WEDNESDAY', openTime: '07:00 AM', closeTime: '03:00 PM'},
    {day: 'THURSDAY', openTime: '07:00 AM', closeTime: '03:00 PM'},
    {day: 'FRIDAY', openTime: '07:00 AM', closeTime: '03:00 PM'},
    {day: 'SATURDAY', openTime: '07:00 AM', closeTime: '03:00 PM'},
    {day: 'SUNDAY', openTime: null, closeTime:null}
];
test('Business Hours of operation component renders as expected with data', () => {
    const component = renderer.create(
        <BusinesHoursOfOperation 
            businessDays={days}
            />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});


test('Business Hours of operation component renders as expected without data', () => {
    const component = renderer.create(
        <BusinesHoursOfOperation />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});


test('Open popover and click cancel button', async () => {
    const { findByTestId, container, findAllByTestId } = render(
        <BusinesHoursOfOperation 
            businessDays={days}
            />
    );
    const elements = await findAllByTestId('edit-hours');
    fireEvent.click(elements[0]);
    const btn = screen.getByTestId('cancel')
    btn.onclick = jest.fn();
    fireEvent.click(btn);
    expect(btn.onclick).toBeCalled()
});


test('Open popover, click checkbox for "closed" and click OK button', async () => {
    const { container, findAllByTestId, getByLabelText  } = render(
        <BusinesHoursOfOperation 
            businessDays={days}
            />
    );
    const elements = await findAllByTestId('edit-hours');
    fireEvent.click(elements[0]);
    
    const elem = getByLabelText('Closed');
    fireEvent.click(elem); 
    
    const btn = screen.getByTestId('save')
    btn.onclick = jest.fn();
    fireEvent.click(btn);
    
    expect(btn.onclick).toBeCalled()
});