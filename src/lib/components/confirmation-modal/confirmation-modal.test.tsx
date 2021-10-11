import React from 'react';
import renderer from 'react-test-renderer';
import { ConfirmationModal } from './ui-elements';


test('Confirmation Modal', () => {
    const component = renderer.create(
        <ConfirmationModal
            isMobile={false}
            isModalOpen={false}
            title={<h5>'Modal Title','Confirmation Title'</h5>}
            content={<p>'Modal Content','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'</p>}
            primaryButtonText={'Save'}
            onPrimaryButtonClick={() => {}}
            secondaryButtonText={'Cancel'}
            onSecondaryButtonClick={() => {}}
        />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
