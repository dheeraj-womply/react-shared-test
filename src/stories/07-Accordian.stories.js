import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { AccordianSection } from '../lib/components'

export default {
    title: 'Accordian',
    component: AccordianSection,
    decorators: [withKnobs]
}

export const Accordian = () => (
    <AccordianSection title={'Accordian tile'} expand={boolean('Expand Accordian', true)} toggle={action('Toggle function invoked')} >
        <div>
            <h3>Accordian content</h3>
            <p>Toggle accrodian from the knob</p>
        </div>
    </AccordianSection>
)