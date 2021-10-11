import React, { useState } from "react";
import TabPanel from '@material-ui/lab/TabPanel'
import { withKnobs, boolean, select, number } from "@storybook/addon-knobs";
import { Tabs } from "../lib/components/tabs";
import { Grid } from "@material-ui/core";
import materialTheme from '../lib/themes/material'
import { ThemeProvider } from '@material-ui/core/styles'

export default {
  title: "Tabs",
  component: Tabs,
  decorators: [withKnobs],
};

const INDICATOR_COLOR_OPTIONS = {
  primary: 'primary',
  secondary: 'secondary'
}

const TEXT_COLOR_OPTIONS = {
  primary: 'primary',
  secondary: 'secondary',
  inherit: 'inherit'
}

const TAB_WIDTH = {
  range: true,
  min: 200,
  max: 600,
  step: 10,
};

const SCROLL_BUTTON_OPTIONS = {
  on: 'on',
  off: 'off',
  auto: 'auto',
  desktop: 'desktop'
}

const VARIANT = {
  fullWidth : 'fullWidth',
  scrollable: 'scrollable',
  standard: 'standard'
}

export const TabComponent = () => {

  const [ activeTab, setActiveTab ] = useState('tab-1')

  return (
    <ThemeProvider theme={materialTheme}>
      <Grid style={{maxWidth: number('gridWidth', 300, TAB_WIDTH)}}>
        <Tabs
          value={activeTab}
          onChange={(event, value) => setActiveTab(value)}
          hideBottomBorder={boolean('hideBottomBorder', false)}
          indicatorColor={select('indicatorColor', INDICATOR_COLOR_OPTIONS)}
          variant={select('variant', VARIANT)}
          textColor={select('textColor', TEXT_COLOR_OPTIONS)}
          scrollButtons={select('scrollButtons', SCROLL_BUTTON_OPTIONS)}
          tabs={[
            { label: 'Tab 1', value: 'tab-1' },
            { label: 'Tab 2', value: 'tab-2' },
            { label: 'Tab 3', value: 'tab-3' },
            { label: 'Tab 4', value: 'tab-4' },
            { label: 'Tab 5', value: 'tab-5' },
            { label: 'Tab 6', value: 'tab-6' },
          ]}
        >

          <TabPanel value="tab-1">
            Tab 1
          </TabPanel>

          <TabPanel value="tab-2">
            Tab 2
          </TabPanel>

          <TabPanel value="tab-3">
            Tab 3
          </TabPanel>

          <TabPanel value="tab-4">
            Tab 4
          </TabPanel>

          <TabPanel value="tab-5">
            Tab 5
          </TabPanel>

          <TabPanel value="tab-6">
            Tab 6
          </TabPanel>

        </Tabs>
      </Grid>
    </ThemeProvider>

  )
}
