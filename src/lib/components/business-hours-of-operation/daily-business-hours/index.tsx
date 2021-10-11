import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { IDay } from '../interfaces';
import { DailyHoursWrapper, StyledEditIcon, TextGrid } from '../ui-elements';

interface IDailyBusinessHours {
    businessDay:IDay;
    onClickOpenPopover:(event:any, businessDay:IDay)=>void; 
    onClick?:()=>void; 
    disabled?:boolean;
    isMobileView?:boolean
    notAvailbleDisplayText?:string;
}

export const DailyBusinessHours: React.FC<IDailyBusinessHours> = ({ businessDay, onClickOpenPopover, onClick, disabled, isMobileView, notAvailbleDisplayText }) => {

    const fontColor = disabled  ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0.87)'
    const editIconPlacement = isMobileView ? 'right' : 'none';

    const renderBusinessTimings = () => {
        return businessDay.isClosed ? <>
            <TextGrid item xs={10} textalign={'center'} color={fontColor}>
                Closed
            </TextGrid>
            </> : 
            <Grid item xs={10}>
                <Grid container>
                { businessDay.hours.map((hours, index) => (
                <TextGrid item xs={12} textalign={'center'} key={index} color={fontColor}>
                    {hours.openTime!=='NA' || hours.closeTime!=='NA' ?  `${hours.openTime || ''} - ${hours.closeTime || ''}` : notAvailbleDisplayText} 
                </TextGrid>
            ))}
                </Grid>
            </Grid>
            
        
    }

    return (
        <DailyHoursWrapper container>
            <TextGrid item xs={4} textalign={'left'} color={fontColor}>
                    {businessDay.day}
            </TextGrid>
            <Grid item xs={8}>
                <Grid container>
                        { renderBusinessTimings() }   
                    <Grid item xs={2} onClick={(event)=> disabled ? onClick && onClick() : onClickOpenPopover(event, businessDay)} style={{cursor: 'pointer'}}>
                        <StyledEditIcon data-testid="edit-hours" customcolor={fontColor} float={editIconPlacement}/>
                    </Grid>
                </Grid>
            </Grid>
        </DailyHoursWrapper>
    )
}
