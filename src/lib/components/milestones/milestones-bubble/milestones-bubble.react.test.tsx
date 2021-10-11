import React from 'react';
import renderer from 'react-test-renderer';

import { MilestoneBubbleLeftArrow, MilestonesBubbleContainer } from './ui-elements';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { MilestoneBubble } from './index';
import { milestonesConfig } from '../../../resources/milestone-resources';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

test('Milestones Bubble DOM are ok', () => {
    const component = renderer.create(
        <MilestonesBubbleContainer />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


test('Milestones Visibility', () => {
    const { getByTestId } = render(<MilestoneBubble milestonesData={milestonesConfig} onClick={() => {}}></MilestoneBubble>);

    const rightArrow = getByTestId('rightArrow');
    expect(rightArrow).toBeInTheDocument();

    fireEvent.click(rightArrow);
    const leftArrow = getByTestId('leftArrow');
    expect(leftArrow).toBeInTheDocument();

});

test('Left arrow DOM are ok', () => {
    const onSubClick = (type: string) => {};
    const milestoneIndex = false;
    const component = renderer.create(
        <div
            hidden={!milestoneIndex}
            data-testid="leftArrow"
            onClick={() => onSubClick('back')}
        >
            <ArrowBackIosIcon />
        </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
