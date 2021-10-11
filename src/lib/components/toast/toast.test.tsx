import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Toast } from './index'

test('Toast elements opened are OK', () => {
    const { container } = render(
        <Toast
            open={true}
            message="Login Success"
            onClose={() => {}}
        />
    )
    expect(container).toMatchSnapshot()
})

test('Toast elements closed are OK', () => {
    const { container } = render(
        <Toast
            open={false}
            message="Login Success"
            onClose={() => {}}
        />
    )
    expect(container).toMatchSnapshot()
})

test('Toast elements with action are OK', () => {
    const { container } = render(
        <Toast
            open={true}
            message="Login Success"
            action="Confirm"
            onClose={() => {}}
        />
    )
    expect(container).toMatchSnapshot()
})

test('Toast elements with alert props are OK', () => {
    const { container } = render(
        <Toast
            open={true}
            message="Login Failed"
            variant="outlined"
            severity="error"
            onClose={() => {}}
        />
    )
    expect(container).toMatchSnapshot()
})

test('Check if close function is called', async () => {
    const onClose = jest.fn()
    const { findByTestId } = render(
        <Toast
            open={true}
            message="Login Success"
            onClose={onClose}
        />
    )
    fireEvent.click(await findByTestId('toast-alert-action'))
    expect(onClose).toBeCalled()
})

test('Check if click away not trigger the close function', async () => {
    const onClose = jest.fn()
    const { findByTestId } = render(
        <Toast
            open={true}
            message="Login Success"
            onClose={onClose}
        />
    )
    fireEvent.click(document)
    expect(onClose).not.toBeCalled()
    expect(await findByTestId('toast-alert-action')).toBeInTheDocument()
})