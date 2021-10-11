import React from 'react';
import { Grid } from '@material-ui/core';
import { withKnobs, object, number } from "@storybook/addon-knobs";
import { promoBanner, alertsBanner, alertsNewBanner, promoNewBanner } from '../lib/resources/preview-banner-resource';
import { PreviewBanner } from '../lib/components/preview-banner';

export default {
    title: 'Preview Banner',
    component: PreviewBanner,
    decorators: [withKnobs]
}

export const previewBannerForPromo = () => (
    <Grid item xs={12} md={4}>
        <PreviewBanner scale={number('Banner Size', 1)} banner={object('Promo banner object', promoBanner)} transformOrigin={'center'}/>
    </Grid>
);

export const previewBannerForAlerts = () => (
    <Grid item xs={12}>
        <PreviewBanner scale={number('Banner Size', 1)} banner={object('Alert banner object', alertsBanner)}/>
    </Grid>
);

export const previewBannerForNewPromo = () => (
  <Grid item xs={12} md={4}>
      <PreviewBanner scale={number('Banner Size', 1)} banner={promoNewBanner} transformOrigin={'center'}/>
  </Grid>
);

export const previewBannerForNewAlerts = () => (
  <Grid item xs={12}>
      <PreviewBanner scale={number('Banner Size', 1)} banner={object('Alert banner object', alertsNewBanner)}/>
  </Grid>
);