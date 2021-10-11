
export interface IMilestoneBubble {
    milestonesData: IMilestonesData;
    onClick: (item: IMilestone) => void;
}

export interface IMilestoneProgressCircle {
    milestonesData: IMilestonesData;
}

export interface IMilestonesData {
    milestones: IMilestone[];
    milestoneCount: number;
    completedMilestoneCount: number;
    pollingPages: IPollingPage[]
}

export interface IMilestone {
    key: string;
    description: string;
    displayText: string;
    urlPage: string;
    urlSubDomain: string;
    sortIndex: number;
    productId: number;
    completedTime: number;
}

export interface IPollingPage {
    milestoneKey: string;
    urlPage: string;
    urlSubDomain: string
}