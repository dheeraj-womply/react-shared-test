import React from 'react';
import { MilestonesProgressCircleContainer, MilestonesProgressCircleInner } from './milestones-progress-circle';

import * as Interfaces from '../interfaces'

export const MilestonesProgressCircle: React.FC<Interfaces.IMilestoneProgressCircle> = ({milestonesData}) => {
    const total = milestonesData.milestoneCount;
    const completed = milestonesData.completedMilestoneCount;
    const completedPercent = Math.round((completed / total) * 100) || 0;
    let background;
    if(completedPercent === 0)  {
        background = {background: '#f76b1c'};
    } else {
        background = {background: `linear-gradient(to bottom, #fbda61 ${completedPercent}%, #f76b1c ${20 + completedPercent}%)`};
    }

    return (
        <MilestonesProgressCircleContainer style={background}>
         <MilestonesProgressCircleInner>{completedPercent}%</MilestonesProgressCircleInner>
        </MilestonesProgressCircleContainer>);
};