import React from 'react';

import { Milestones } from '../lib/components';

import { milestonesConfig } from "../lib/resources/milestone-resources";

export default {
    title: 'Milestones',
    component: Milestones
}
export const MilestonesWithData = () => {
    const handleClick = (event) => {
    }

    return (
        <div>
            <Milestones onClick={handleClick} milestonesData={milestonesConfig}/>
        </div>
    );
};

export const MilestonesWithoutData = () => {
    const milestonesConfigWithoutData = {...milestonesConfig}
    milestonesConfigWithoutData.milestones = [];
    milestonesConfigWithoutData.completedMilestoneCount = null;
    milestonesConfigWithoutData.milestoneCount = null;
    milestonesConfigWithoutData.pollingPages = null;
    return (
        <div>
            <Milestones milestonesData={milestonesConfigWithoutData} onClick={() => {}}/>
        </div>
    )
}