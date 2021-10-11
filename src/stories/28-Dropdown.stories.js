import { text, withKnobs } from "@storybook/addon-knobs";
import { Dropdown, Star } from "../lib/components";
import { Grid, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import { ERROR_MAIN_COLOR } from "../lib/themes/default-styles";
import materialTheme from '../lib/themes/material'

export default {
    title: 'Dropdown',
    component: Dropdown,
    decorators: [withKnobs]
}


export const dropdownWithOptions = () => {
    const [sort, setSort] = useState('')

    const option1 = text('Option 1', 'Newest')
    const option2 = text('Option 2', 'Oldest')
    const option3 = text('Option 3', 'Highest rated')
    const option4 = text('Option 4', 'Lowest rated')

    const options = [
        { title: option1, value: 'NEWEST' },
        { title: option2, value: 'OLDEST' },
        { title: option3, value: 'HIGHEST_RATED' },
        { title: option4, value: 'LOWEST_RATED' },
    ]

    const onChange = (e) => {
        setSort(e.target.value)
    }

    return (
        <ThemeProvider theme={materialTheme}>
            <Grid item xs={12} md={4} style={{ padding: 40 }}>
                <Dropdown
                    options={options}
                    onChange={onChange}
                    label={'Dropdown label'}
                    labelId={'123'}
                    value={sort}
                />
            </Grid>
        </ThemeProvider>
    )
};

export const dropdownWithDefaultValue = () => {
    const [sort, setSort] = useState('NEWEST')

    const option1 = text('Option 1', 'Newest')
    const option2 = text('Option 2', 'Oldest')
    const option3 = text('Option 3', 'Highest rated')
    const option4 = text('Option 4', 'Lowest rated')

    const options = [
        { title: option1, value: 'NEWEST' },
        { title: option2, value: 'OLDEST' },
        { title: option3, value: 'HIGHEST_RATED' },
        { title: option4, value: 'LOWEST_RATED' },
    ]

    const onChange = (e) => {
        setSort(e.target.value)
    }

    return (
        <ThemeProvider theme={materialTheme}>
            <Grid item xs={12} md={4} style={{ padding: 40 }}>
                <Dropdown
                    options={options}
                    onChange={onChange}
                    label={'Dropdown label'}
                    labelId={'234'}
                    value={sort}
                />
            </Grid>
        </ThemeProvider>
    )
};

export const dropdownWithCustomOptions = () => {
    const [value, setValue] = useState('')

    const options = Array.from({ length: 4 }, (v, i) => ({
        title: text(`Option ${i + 1}`, `Option ${i + 1}`),
        value: `option-${i + 1}`
    }))

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const getSelectedItem = (value) => {
        const item = options.find(el => el.value === value)
        return <span>{item.title}</span>
    }

    const customOptions = options.map((el) => ({
        value: el.value,
        title: (
            <div style={{ display: 'flex' }}>
                <span style={{ display: 'flex', marginRight: '8px' }}>
                    <Star
                        width={1}
                        primaryColor={ERROR_MAIN_COLOR}
                        secondaryColor={'#636E72'}
                    />
                </span>
                <span>{el.title}</span>
            </div>
        )
    }))

    return (
        <ThemeProvider theme={materialTheme}>
            <Grid item xs={12} md={4} style={{ padding: 40 }}>
                <Dropdown
                    onChange={onChange}
                    label={'Dropdown label'}
                    labelId={'345'}
                    value={value}
                    renderValue={(value) => getSelectedItem(value)}
                    options={customOptions}
                />
            </Grid>
        </ThemeProvider>
    )
};