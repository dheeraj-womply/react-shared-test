import * as Interfaces from '../interfaces';
import React from 'react';
import { MilestoneBubble } from '../milestones-bubble';
import { MilestonesProgressCircle } from '../milestones-progress-circle';
import { MilestonesContainer } from './milestones';

export const Milestones: React.FC<Interfaces.IMilestoneBubble> = (props) => {
  return (<MilestonesContainer>
              <MilestoneBubble onClick={(event) => props.onClick(event)} {...props}/>
              <MilestonesProgressCircle {...props}/>
          </MilestonesContainer>)
};

export { MilestonesContainer } from './milestones'