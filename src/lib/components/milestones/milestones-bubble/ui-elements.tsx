import styled from 'styled-components'
import { DEFAULT_FONT_FAMILY } from '../../../themes/default-styles'

export const MilestonesBubbleContainer: any = styled.div`
    background: rgba(216, 216, 216, 0.25);
    position: relative;
    min-width: 290px;
    height: 45px;
    padding: 8px;
    color: #000;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin-right: 10px;
    &:after {
        top: 16px;
        right: -10px;
        bottom: auto;
        left: auto;
        border-width: 7px 0 7px 10px;
        border-color: transparent rgba(216, 216, 216, 0.25);
        content: "";
        position: absolute;
        border-style: solid;
        display: block;
        width: 0;
    }
`;

export const MilestoneBubbleLeftArrow: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 29px;
    height: 26px;
    align-self: flex-end;
    width: 29px;
    height: 15px;
    svg {
        cursor: pointer;
        width: 29px;
        height: 26px;
        user-select: none;
    }
    svg path {
        fill: #d5d5d5;
    }
`;

export const MilestoneBubbleRightArrow: any = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: end;
    align-self: flex-end;
    width: 29px;
    height: 23px;
    svg {
        cursor: pointer;
        width: 29px;
        height: 26px;
        user-select: none;
    }
    svg path {
        fill: #d5d5d5;
    }
`;

export const MilestoneBubbleMain: any = styled.div`
    margin: 0 4px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    align-content: center;
    flex: 1;
    flex-direction: column;
`;

export const MilestoneBubbleMainComplete: any = styled.div`
    color: #717171;
    font-size: 11px;
    font-family: ${DEFAULT_FONT_FAMILY};
    .completed {
        font-weight: bold; 
    }
`;

export const MilestoneContainer: any = styled.div`
    font-size: 14px;
    color: #4caeeb;
    cursor: pointer;
    margin: 0 4px;
    white-space: nowrap;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: row;
    
    .milestones {
        margin-left: 0;
        transition: margin-left 150ms;  
        transition-timing-function: ease-in-out;
        display: flex;
        flex-direction: row;
    }
    
    .milestones .milestone {
        opacity: 1;
        text-align:center;
        min-width: 200px;
        transition: opacity 150ms;
        transition-timing-function: ease-in-out;
        font-family: ${DEFAULT_FONT_FAMILY};
    }
`;
