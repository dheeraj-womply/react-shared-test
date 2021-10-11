import React from 'react';
import { Grid } from '@material-ui/core';
import { BusinesHoursOfOperation } from '../lib/components';
import { withKnobs, boolean, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { closedDays, mixedDays } from '../lib/resources/business-hours-of-operation-resource';

export default {
    title: 'Business Hours of Operation',
    component: BusinesHoursOfOperation,
    decorators: [withKnobs]
}

const onChangeTime = action('Updated time');

export const mixedTimings = () => (
    <Grid item xs={12} md={4}>
        <BusinesHoursOfOperation disabled={boolean('disabled', true)}  businessDays={object('Mixed timings', mixedDays )} onChange={onChangeTime}onClick={action('Edit icon clicked')}/>
    </Grid>
);

export const allDaysClosed = () => (
    <Grid item xs={12} md={4}>
        <BusinesHoursOfOperation businessDays={object('Closed timings', closedDays )} onChange={onChangeTime}/>
    </Grid>
);

export const collapsedMixedTimings = () => (
    <Grid item xs={12} md={4}>
        <BusinesHoursOfOperation collapse={boolean('doCollapse', true)} isMobileView={boolean('isMobileView', false)} businessDays={object('Mixed timings', mixedDays )} onChange={onChangeTime}/>
    </Grid>
);


export const allDaysNA = () => (
    <Grid item xs={12} md={4}>
        <BusinesHoursOfOperation  disabled={boolean('disabled', false)} notAvailbleDisplayText={object('Not available label', 'NA')} businessDays={object('NA timings', [] )} onChange={onChangeTime}/>
    </Grid>
);
