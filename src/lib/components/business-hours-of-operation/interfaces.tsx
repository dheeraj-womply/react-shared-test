export interface IDay {
    day: string,
    hours : Array<IHoursRange>,
    isClosed: boolean
}

interface IHoursRange {
    openTime: string | null,
    closeTime: string | null
}

export interface ITimepickerProps {
    handleDateChange:(date: string | null, fieldName: 'openTime'|'closeTime', index:number) => void,
    fieldName: 'openTime'|'closeTime',
    value: string | null,
    index: number,
    disabled?: boolean
}

export interface IBusinessDaysOfWeek {
    day: string;
    openTime: string | null;
    closeTime: string | null;
}