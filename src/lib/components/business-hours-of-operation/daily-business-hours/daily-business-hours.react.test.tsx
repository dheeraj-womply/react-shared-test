import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { DailyBusinessHours } from '.';

test('Test snapshot for Daily Business Hours component when business is open', () => {
    const onClickOpenPopover = jest.fn();
    const component = renderer.create(
        <DailyBusinessHours 
            businessDay={{ day: 'Monday', hours : [ {openTime: '07:00 AM', closeTime: '03:00 PM'} ],isClosed: false }}
            onClickOpenPopover={onClickOpenPopover}
            />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});

test('Test snapshot for Daily Business Hours component when business is closed', () => {
    const onClickOpenPopover = jest.fn();
    const component = renderer.create(
        <DailyBusinessHours 
            businessDay={{ day: 'Monday', hours : [ {openTime: null, closeTime: null} ],isClosed: true }}
            onClickOpenPopover={onClickOpenPopover}
            />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});

test('Test snapshot for Daily Business Hours component when business is open but no time selected', () => {
    const onClickOpenPopover = jest.fn();
    const component = renderer.create(
        <DailyBusinessHours 
            businessDay={{ day: 'Monday', hours : [ {openTime: null, closeTime: null} ],isClosed: false }}
            onClickOpenPopover={onClickOpenPopover}
            />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});


test('Check if popover open function is called', async () => {
    const onClickOpenPopover = jest.fn();
    const { findByTestId } = render(
        <DailyBusinessHours 
            businessDay={{ day: 'Monday', hours : [ {openTime: '07:00 AM', closeTime: '03:00 PM'} ],isClosed: false }}
            onClickOpenPopover={onClickOpenPopover}
            />
    );
    fireEvent.click(await findByTestId('edit-hours'));
    expect(onClickOpenPopover).toBeCalled()
});


test('Check if onClick fn is called when disbaled prop is passed', async () => {
    const onClickOpenPopover = jest.fn();
    const onClickFn = jest.fn();

    const { findByTestId } = render(
        <DailyBusinessHours 
            disabled={true}
            onClick={onClickFn}
            businessDay={{ day: 'Monday', hours : [ {openTime: '07:00 AM', closeTime: '03:00 PM'} ],isClosed: false }}
            onClickOpenPopover={onClickOpenPopover}
            />
    );
    fireEvent.click(await findByTestId('edit-hours'));
    expect(onClickFn).toBeCalled()
});