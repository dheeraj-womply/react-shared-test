import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion } from '@material-ui/core';
import { AccordianTitle, StyledAccordionSummary, StyledAccordionDetails } from './ui-elements';

export const AccordianSection: React.FC<{title:string; expand?:boolean; toggle?:()=>void; children?:JSX.Element }> = ({title, expand=true, toggle, children }):JSX.Element => (
    <Accordion elevation={0} expanded={expand} >
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} onClick={toggle}>
            <AccordianTitle data-testid={'accordian-title'}>{title}</AccordianTitle>
        </StyledAccordionSummary>
        <StyledAccordionDetails data-testid={'accordian-summary'}>
            { children }
        </StyledAccordionDetails>
    </Accordion>
);
