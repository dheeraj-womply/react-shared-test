import React, { useState } from "react";
import { Button, VerificationCodeInput } from "../lib/components";
import muiTheme from "../lib/themes/material";
import { ThemeProvider } from "@material-ui/core/styles";
import PageLayout from "../lib/components/page-layout";

export default {
    title: 'Verification code input',
    component: VerificationCodeInput,
}

export const sixFieldsNumber = () => {
    const [value, setValue] = useState()

    const handleClick = () => {
        setValue('')
    }

    return (
        <ThemeProvider theme={muiTheme}>
            <PageLayout>
                <VerificationCodeInput
                    fields={6}
                    name="numericCode"
                    inputMode="numeric"
                    type="number"
                    placeholder="0"
                    onChange={val => setValue(val)}
                    value={value}
                />
                <Button style={{ marginTop: '2.5rem'}} onClick={handleClick}>
                    Clear input values
                </Button>
            </PageLayout>
        </ThemeProvider>
    );
}

export const nineFieldsAlphaNumeric = () => {
    const [value, setValue] = useState()
    const regex = /^([a-z0-9]+)$/gi

    const handleClick = () => {
        setValue('')
    }

    return (
        <ThemeProvider theme={muiTheme}>
            <PageLayout>
                <VerificationCodeInput
                    fields={9}
                    name="verbatimCode"
                    inputMode="verbatim"
                    type="text"
                    onChange={val => setValue(val)}
                    value={value}
                    isValid={value !== undefined ? regex.test(value) : true}
                />
                <Button style={{ marginTop: '2.5rem'}} onClick={handleClick}>
                    Clear input values
                </Button>
            </PageLayout>
        </ThemeProvider>
    );
}

export const withInitialValue = () => {
    const [value, setValue] = useState('123456')

    const handleClick = () => {
        setValue('')
    }

    return (
        <ThemeProvider theme={muiTheme}>
            <PageLayout>
                <VerificationCodeInput
                    fields={6}
                    name="numericCode"
                    inputMode="numeric"
                    type="number"
                    placeholder="0"
                    onChange={val => setValue(val)}
                    value={value}
                />
                <Button style={{ marginTop: '2.5rem'}} onClick={handleClick}>
                    Clear input values
                </Button>
            </PageLayout>
        </ThemeProvider>
    );
}
