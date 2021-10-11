import styled from "styled-components";
import { AccordionSummary, AccordionDetails } from '@material-ui/core';
import { DEFAULT_FONT_FAMILY_BOLD } from '../../themes/default-styles';

export const AccordianTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .005em;
    font-family: ${DEFAULT_FONT_FAMILY_BOLD};
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
    padding: 0;
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
    padding: 0;
`;