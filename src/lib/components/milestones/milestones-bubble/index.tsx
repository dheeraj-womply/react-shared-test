import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
    MilestonesBubbleContainer,
    MilestoneBubbleLeftArrow,
    MilestoneBubbleMain,
    MilestoneBubbleMainComplete,
    MilestoneBubbleRightArrow, MilestoneContainer
} from './ui-elements';



import * as Interfaces from '../interfaces'

export const MilestoneBubble: React.FC<Interfaces.IMilestoneBubble> = ({ milestonesData, onClick }) => {
    const MILESTONES_WIDTH = 200;
    const [milestoneIndex, setMilestoneIndex] = useState(0);
    const [milestoneContainerOffset, setMilestoneContainerOffset] = useState({marginLeft: 0});
    useEffect(() => setMilestoneContainerOffset({marginLeft: parseInt(`${-(MILESTONES_WIDTH * milestoneIndex)}`)}),[milestoneIndex]);

    const onSubClick = (type: string) => {
        if (type === 'back') {
            if (milestoneIndex > 0) {
                setMilestoneIndex(milestoneIndex - 1);
            }
        }
        if (type === 'next') {
            if (milestoneIndex < milestonesData.milestones.length - 1 ) {
                setMilestoneIndex(milestoneIndex + 1);
            }
        }

    };

    return (<MilestonesBubbleContainer>
            <MilestoneBubbleLeftArrow>
                <div
                    hidden={!milestoneIndex}
                    data-testid="leftArrow"
                    onClick={() => onSubClick('back')}
                >
                    <ArrowBackIosIcon />
                </div>
            </MilestoneBubbleLeftArrow>
            <MilestoneBubbleMain>
                <MilestoneBubbleMainComplete>
                    Milestones complete:
                    <span className="completed"> {milestonesData.completedMilestoneCount} </span>
                    <span>/ </span>
                    <span>{milestonesData.milestoneCount}</span>
                </MilestoneBubbleMainComplete>
                <MilestoneContainer>
                    <div className="milestones" style={milestoneContainerOffset}>
                        {milestonesData.milestones.map((item: Interfaces.IMilestone, index: number) => (
                            <div onClick={(event) => onClick(item)} className="milestone" key={index}>
                                {item.displayText}
                            </div>)
                        )}
                    </div>
                </MilestoneContainer>
            </MilestoneBubbleMain>
            <MilestoneBubbleRightArrow>
                <div
                    hidden={milestoneIndex === milestonesData.milestones.length - 1}
                    onClick={() => onSubClick('next')}
                    data-testid="rightArrow"
                >
                    <ArrowForwardIosIcon/>
                </div>
            </MilestoneBubbleRightArrow>
        </MilestonesBubbleContainer>)
};
