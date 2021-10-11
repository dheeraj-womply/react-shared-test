import React from 'react';
import moment from 'moment';
import { TimePicker } from 'antd';
import { ITimepickerProps } from '../interfaces';
import 'antd/dist/antd.css';
import styled from 'styled-components'

const FORMAT = 'h:mm A';

export const AntdTimepicker: React.FC<ITimepickerProps> = ({handleDateChange, fieldName, value, index, disabled=false}) => (
    <Wrapper>
        <TimePicker 
            use12Hours 
            minuteStep={15} 
            value={value && value!=='NA' ? moment(value, FORMAT) : null} 
            format={FORMAT} 
            disabled={disabled}
            data-testid={`${fieldName}-${index}`}
            getPopupContainer={(node)=>node.parentElement!}
            onClick={()=>handleDateChange( 'NA', fieldName, index)}
            onChange={(e)=>handleDateChange( e ? moment(e).format(FORMAT) : e, fieldName, index)} 
            onSelect={(e)=>handleDateChange(e ? moment(e).format(FORMAT) : e, fieldName, index)} 
            />
    </Wrapper>
);


export const Wrapper = styled.div`
    .ant-picker-panel-container {
        position: fixed !important;
    }

    .ant-picker-dropdown {
        position: fixed !important;
    }
`;