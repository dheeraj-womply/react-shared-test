import React from 'react';

import renderer from 'react-test-renderer';
import { milestonesConfig } from '../../../resources/milestone-resources';
import { Milestones } from './index';

test('Milestone DOM elements are OK', () => {
    const component = renderer.create(
        <Milestones milestonesData={milestonesConfig} onClick={() => {}}></Milestones>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
