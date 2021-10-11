import { concat } from 'lodash';
import { IBusinessDaysOfWeek, IDay } from '../components/business-hours-of-operation/interfaces';

const DAYS_OF_WEEK = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

export const modifyInputData = (businessDays:Array<IBusinessDaysOfWeek> = []) => DAYS_OF_WEEK.map(weekDay=> {
    const hours = (businessDays || []).filter(busDay=>busDay.day===weekDay).map(hour=>{
        return{ openTime: hour.openTime, closeTime: hour.closeTime }
    });
    const isClosed = !!hours.length && hours.every(hour=>hour.openTime==null && hour.closeTime===null);

    return {
        day: weekDay,
        isClosed: isClosed || false,
        hours: !!hours.length ? hours : [{ openTime: 'NA', closeTime: 'NA' }]
    }
});

export const modifyOutputData = (businessDays:Array<IDay>) => concat([], ...(businessDays || []).map(day=>day.hours.map(hour=>{
        if(hour.openTime!=='NA' || hour.closeTime!=='NA') {
            return {
                day: day.day,
                openTime: hour.openTime,
                closeTime: hour.closeTime
            }
        }    
    }).filter(day=>!!day)
));