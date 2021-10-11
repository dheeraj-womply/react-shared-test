import styled from "styled-components";
import { DEFAULT_FONT_FAMILY } from '../../../themes/default-styles'

export const MilestonesProgressCircleContainer = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    transition: background 150ms;
    transition-timing-function: ease-in-out;
    background: linear-gradient(to bottom, #fbda61, #f76b1c);
    box-sizing: border-box;
    padding: 4px;
`;

export const MilestonesProgressCircleInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    background: #fff;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid transparent;
    font-size: 12px;
    color: #1e1e1e;
    box-sizing: border-box;
    font-family: ${DEFAULT_FONT_FAMILY};
`;