import React from 'react'
import { RatingStars } from "../lib/components";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
    title: 'Rating Stars',
    component: RatingStars,
    decorators: [withKnobs]
}

export const WithDynamicValue = () => {
    const value = number("Rating value", 3.4)
    return (
        <div>
            <RatingStars value={value}/>
        </div>
    )
}
