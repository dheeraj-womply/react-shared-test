import React from 'react';
import renderer from 'react-test-renderer';
import { PreviewBanner } from '.';
import { promoBanner, alertsBanner } from '../../resources/preview-banner-resource';
import { render, fireEvent } from '@testing-library/react';

test('Business Hours of operation component renders as expected with text+code banner data and scale=0.5', () => {
    const component = renderer.create(
        <PreviewBanner 
            banner={promoBanner}
            scale={0.5}
            />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});

test('Business Hours of operation component renders as expected with text only banner data and scale=1', () => {
    const component = renderer.create(
        <PreviewBanner 
            banner={alertsBanner}
            scale={1}
            />
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});


test('Open popover and click cancel button', async () => {
    const { findByTestId, container, getByText } = render(
        <PreviewBanner 
            banner={promoBanner}
            scale={0.5}
            />
    );
    fireEvent.click(getByText(/Show Promo Code/i));
    expect(getByText(/GET50OFF/i)).toBeInTheDocument()
});
