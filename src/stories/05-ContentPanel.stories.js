import React from 'react';
import { ContentPanel } from "../lib/components";
import { withKnobs, object } from "@storybook/addon-knobs";
import { TextField, Grid } from '@material-ui/core'

export default {
    title: 'ContentPanel',
    component: ContentPanel,
    decorators: [withKnobs]
}

export const withDynamicTitleAndContent = () => {
    const field = object("Fields", {
        title: 'Revenue Highlights',
        content: {
            first : {
                type: 'text',
                label: 'First field label',
                value : "Change this value from knob object",
                disabled: false
            },
            second : {
                type: 'number',
                label: 'Second field label',
                value : "9890979089",
                disabled: false
            }
        }
    })
    return (
        <div style={{padding: 30}}>
            <ContentPanel title={field.title}>
                <Grid container>
                    <Grid item xs={12} md={6} style={{padding: 20}}>
                        <TextField 
                            label={field.content.first.label}
                            type={field.content.first.type} 
                            value={field.content.first.value} 
                            disabled={field.content.first.disabled}
                            style={{minWidth: '100%'}}
                            />
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding: 20}}>
                        <TextField 
                            label={field.content.second.label}
                            type={field.content.second.type} 
                            value={field.content.second.value} 
                            disabled={field.content.second.disabled}
                            style={{minWidth: '100%'}}
                            />
                    </Grid>
                </Grid>
            </ContentPanel>
        </div>
    );
}