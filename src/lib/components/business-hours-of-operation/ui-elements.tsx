import styled from 'styled-components';
import { DEFAULT_FONT_FAMILY, MEDIUM_FONT_SIZE } from '../../themes/default-styles';
import { Grid, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export const BusinessHoursWrapper = styled.div`
    font-family: ${DEFAULT_FONT_FAMILY};
    font-size: ${MEDIUM_FONT_SIZE};
`;

export const DailyHoursWrapper = styled(Grid)`
    padding: 8px 0;
    font-family: ${DEFAULT_FONT_FAMILY};
`;

export const StyledEditIcon = styled(EditIcon)`
    width: 18px;
    vertical-align: bottom;
    color: ${(props: {customcolor: string, float: string}) => props.customcolor};
    float: ${(props: {float: string}) => props.float};
`;

export const TextGrid = styled(Grid)`
    text-align: ${(props: {textalign: string, color: string}) => props.textalign};
    color: ${(props: {color: string}) => props.color};
`;

export const TimepickerFieldLabel = styled.p`
    margin-bottom: 0;
    font-size: ${MEDIUM_FONT_SIZE};
`;

export const TimePickerIconGrid = styled(Grid)`
    margin: auto !important;
    cursor: ${(props: {cursor: string}) => props.cursor};
`;

export const TimePickerIcon = styled.img`
    width: 20px; 
    opacity: 0.6;
`;

export const PopoverButtonGrid = styled(Grid)`
    margin: 15px auto !important;
`;

export const PopoverButton = styled(Button)`
    min-width: 100px;
    font-family: ${DEFAULT_FONT_FAMILY};
`;