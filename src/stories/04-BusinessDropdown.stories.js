import React from 'react';

import { BusinessDropdown } from '../lib/components';
import { businessDropdown } from "../lib/resources/business-dropdown-resource";
import muiTheme from "../lib/themes/material";
import { ThemeProvider } from "@material-ui/core/styles";
import { action } from '@storybook/addon-actions';

export default {
    title: 'BusinessDropdown',
    component: BusinessDropdown
}

export const BusinessDropdownComponent = () => {
    const slug = 'authentic-plaster-and-til-ccpm';
    const activeLocation = businessDropdown.find(item => item.slug === slug);

    return (
        <ThemeProvider theme={muiTheme}>
            <div style={{width: 500}}>
                <BusinessDropdown handleChange={action('Selected business location')} data={{businessDropdown, activeLocation}}/>
            </div>
        </ThemeProvider>

    );
};