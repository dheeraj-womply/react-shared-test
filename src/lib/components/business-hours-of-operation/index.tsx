import React, { useState, useEffect } from 'react';
import { Grid, FormGroup, Checkbox, FormControlLabel, Typography, Box, Collapse } from '@material-ui/core';
import { MaterialPopover } from './material-popover';
import { DailyBusinessHours } from './daily-business-hours';
import { IDay, IBusinessDaysOfWeek } from './interfaces';
import { useStyles } from './styles';
import { BusinessHoursWrapper } from './ui-elements';
import { AntdTimepicker } from './antd-timepicker';
import { cloneDeep } from 'lodash';
import { PLUS_ICON, MINUS_ICON } from '../../resources/images';
import { modifyInputData, modifyOutputData} from '../../utils/businesshours.util';
import { TimepickerFieldLabel, TimePickerIconGrid, TimePickerIcon, PopoverButtonGrid, PopoverButton } from './ui-elements';

interface IBusinessHoursProps {
    businessDays?:Array<IBusinessDaysOfWeek>;
    collapse?:boolean; 
    onChange?:(data:Array<any>)=>void; 
    onClick?:()=>void; disabled?:boolean;
    isMobileView?:boolean;
    notAvailbleDisplayText?:string;
} 

export const BusinesHoursOfOperation: React.FC<IBusinessHoursProps> = ({ businessDays, collapse=false, onChange=()=>{}, onClick=()=>{}, disabled, isMobileView, notAvailbleDisplayText='Not Available' }) => {
    const classes = useStyles();
    const hourObject = { openTime: null, closeTime: null };

    const [ open, setOpen ] = useState<HTMLElement | null>(null);

    const [ selectedDay, setSelectedDay ] = useState<IDay>(
        { day: '', hours : [{...hourObject}], isClosed: false }
    );

    const [days, setDays] = useState<Array<IDay>>([
        { day: 'Monday', hours : [ {...hourObject} ], isClosed: false },
        { day: 'Tuesday', hours : [ {...hourObject} ], isClosed: false },
        { day: 'Wednesday', hours : [ {...hourObject} ], isClosed: false },
        { day: 'Thursday', hours : [ {...hourObject} ], isClosed: false },
        { day: 'Friday', hours : [ {...hourObject} ], isClosed: false },
        { day: 'Saturday', hours : [ {...hourObject} ], isClosed: false },
        { day: 'Sunday', hours : [ {...hourObject} ], isClosed: false }
    ]);

    useEffect(() => {
        const daysList = modifyInputData(businessDays);
        setDays([...daysList]);
    }, [businessDays]);

    const handleDateChange = (date: string | null, label: 'openTime'|'closeTime', index:number) => {
        if(!selectedDay.hours[index]) selectedDay.hours.splice(index, 1, {openTime:null, closeTime:null});
        if(date==='NA') {
            selectedDay.isClosed = false;
        } else {
            selectedDay.hours[index][label] = date;
        }
        setSelectedDay(cloneDeep(selectedDay));
    }

    const onClickClosedCheck = (event: React.ChangeEvent<HTMLInputElement>, day:string) => {
        selectedDay!.isClosed = event.currentTarget.checked;
        selectedDay.hours = [{...hourObject}];
        setSelectedDay({...selectedDay});
    }
    
    const onClickOpenPopover = (event:any, day:any) => {
        setSelectedDay(cloneDeep(day));
        setOpen(event.currentTarget)
    }

    const updateBusinessHours = () => {
        const allDays = [...days];
        selectedDay.hours = selectedDay.hours.filter(e =>!!e.openTime || !!e.closeTime);
        if(!selectedDay.hours.length) {
            if(!selectedDay.isClosed) {
                selectedDay.hours.push({openTime: 'NA', closeTime: 'NA'});
            } else {
                selectedDay.hours.push({...hourObject});
            }
            allDays.splice(allDays.map(e=>e.day).indexOf(selectedDay.day),1, selectedDay);
        } else {
            allDays.splice(allDays.map(e=>e.day).indexOf(selectedDay.day),1, selectedDay);
        }
        setDays(allDays || []);
        onChange( modifyOutputData(allDays) || []);
    }

    const onClosePopover = (doSave?:any) => {
        setOpen(null)
        if(doSave) updateBusinessHours();
    }

    const addPickertoPopover = (addElement:boolean, index=0) => {
        addElement ? selectedDay.hours.push({...hourObject}) : selectedDay.hours.splice(index, 1);
        setSelectedDay(cloneDeep({...selectedDay}))
    }

    const renderDays = () => {
        let daysList = days.map((day, index) => <DailyBusinessHours onClick={onClick} disabled={disabled} key={index} businessDay={day} onClickOpenPopover={onClickOpenPopover} isMobileView={isMobileView} notAvailbleDisplayText={notAvailbleDisplayText}/>);
        let collapsibleList = daysList.splice(1, days.length);
        return [...daysList, <Collapse key={daysList.length} in={!collapse}>{[...collapsibleList]}</Collapse>]
    }

    const isSaveDisabled = () => !!selectedDay.hours.filter((e, i, arr)=>(((!e.openTime || e.openTime==='NA') && (!!e.closeTime && e.closeTime!=='NA')) || ((!!e.openTime && e.openTime!=='NA') && (!e.closeTime || e.closeTime==='NA')))).length;

    const renderTimepickerGridForSelectedDay = () => {
        let arr = [...selectedDay.hours];
        
        return arr.map((hours,index, originalArray) => (
            <Grid container key={index}>
                <Grid item xs={5}>
                    <Box m={1}>
                        <TimepickerFieldLabel>Open</TimepickerFieldLabel>
                        <AntdTimepicker index={index} handleDateChange={handleDateChange} value={hours.openTime} fieldName={'openTime'}/>
                    </Box>   
                </Grid>
                <Grid item xs={5}>
                    <Box m={1}>
                        <TimepickerFieldLabel>Close</TimepickerFieldLabel>
                        <AntdTimepicker index={index} handleDateChange={handleDateChange} value={hours.closeTime} fieldName={'closeTime'}/>
                    </Box>
                </Grid>
                <TimePickerIconGrid item xs={2} cursor={selectedDay.isClosed ? 'not-allowed' : 'pointer'}>
                    <Box mt={2}>
                        <TimePickerIcon
                            {
                                ...(index === originalArray.length-1 ? 
                                {
                                    alt:"add time", 
                                    src: PLUS_ICON, 
                                    onClick: () => !selectedDay.isClosed && addPickertoPopover(true)
                                }
                                : 
                                {
                                    alt:"delete time", 
                                    src: MINUS_ICON, 
                                    onClick: () => !selectedDay.isClosed && addPickertoPopover(false, index)
                                })
                            }    
                        />
                    </Box>
                </TimePickerIconGrid>
            </Grid>
        ))
        
    }

    return(
        <BusinessHoursWrapper>
            <Grid item xs={12} style={{paddingLeft:0}} className={`${classes.paper}`}>
                { renderDays() }
            </Grid>
            <MaterialPopover element={open} onClose={()=>onClosePopover(false)}>
                <Grid container className={classes.paper}>

                    <Grid item xs={9} md={10}>
                        { renderTimepickerGridForSelectedDay() }
                    </Grid>

                    <Grid item xs={3} md={2}>
                        <Box m={.4}>
                            <FormGroup aria-label="position" row>
                                <BusinessHoursWrapper>
                                    <FormControlLabel
                                        value="closed"
                                        control={<Checkbox color="primary" checked={selectedDay.isClosed} onChange={(event)=>onClickClosedCheck(event, selectedDay.day)}/>}
                                        label={<Typography className={classes.formControlLabel}>Closed</Typography>}
                                        labelPlacement="top"
                                        />
                                </BusinessHoursWrapper>
                            </FormGroup>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <PopoverButtonGrid item xs={4} >
                        <PopoverButton variant="contained" disabled={isSaveDisabled()} color="primary" data-testid={'save'} onClick={()=>onClosePopover(true)}>Save</PopoverButton>
                    </PopoverButtonGrid>
                    
                    <PopoverButtonGrid item xs={4} >
                        <PopoverButton variant="contained" data-testid={'cancel'} onClick={()=>onClosePopover(false)}>Cancel</PopoverButton>                        
                    </PopoverButtonGrid>
                </Grid>
            </MaterialPopover>
        </BusinessHoursWrapper>
    )
}