import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ConfirmationModal } from '../lib/components'

export default {
    title: 'ConfirmationModal',
    component: ConfirmationModal,
    decorators: [withKnobs]
}

const onChange = action('Value changed');

export const ConfirmationModalComponentOpen = () => {
    return (
        <ConfirmationModal
            isMobile={boolean('isMobile',false)}
            isModalOpen={boolean('isModalOpen',true)}
            title={<h5>{text('Modal Title','Confirmation Title')}</h5>}
            content={<p>{text('Modal Content','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco')}</p>}
            primaryButtonText={text('PrimaryButtonText','Save')}
            onPrimaryButtonClick={onChange}
            secondaryButtonText={text('SecondaryButtonText','Cancel')}
            onSecondaryButtonClick={onChange}
        />
    )
}
