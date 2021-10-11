import React from "react"
import { text, withKnobs } from "@storybook/addon-knobs"
import { ThemeProvider } from '@material-ui/core/styles'
import { FormErrorMessage } from "../lib/components"
import muiTheme from "../lib/themes/material"

export default {
    title: 'Form error message',
    component: FormErrorMessage,
    decorators: [withKnobs],
}

export const formErrorMessage = () => {
    const errorMessage = text("errorMessage", "An error occurred while processing your request. Please try again.")
    return (
        <ThemeProvider theme={muiTheme}>
            <FormErrorMessage errorMessage={errorMessage} />
        </ThemeProvider>
    );
}