import React from 'react'
import renderer from 'react-test-renderer'
import { Switch } from "./index";

describe('Switch testing', () => {
    test('Switch checked', () => {
        const disabled = false
        const isChecked = true
        const component = renderer.create(
            <Switch
                className={disabled ? 'pendo-ref__auto-reply-switch' : undefined}
                checked={isChecked}
                onChange={jest.fn()}
                disabled={disabled}
            />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('Switch unchecked', () => {
        const disabled = false
        const isChecked = false
        const component = renderer.create(
            <Switch
                className={disabled ? 'pendo-ref__auto-reply-switch' : undefined}
                checked={isChecked}
                onChange={jest.fn()}
                disabled={disabled}
            />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('Switch checked disabled', () => {
        const disabled = true
        const isChecked = true
        const component = renderer.create(
            <Switch
                className={disabled ? 'pendo-ref__auto-reply-switch' : undefined}
                checked={isChecked}
                onChange={jest.fn()}
                disabled={disabled}
            />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('Switch unchecked disabled', () => {
        const disabled = true
        const isChecked = false
        const component = renderer.create(
            <Switch
                className={disabled ? 'pendo-ref__auto-reply-switch' : undefined}
                checked={isChecked}
                onChange={jest.fn()}
                disabled={disabled}
            />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
