import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import styled from "styled-components"

export const StarsContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`

export interface RatingStarsProps {
    value: number
}

export const RatingStars: React.FC<RatingStarsProps> = ({ value }): JSX.Element => {
    const stars = [1, 2, 3, 4, 5]
    const roundedValue = Math.round(value)

    return (
        <StarsContainer>
            {stars.map(item => {
                return roundedValue >= item
                    ? <StarIcon key={item} style={{color: '#f68540'}} fontSize="small" />
                    : <StarBorderIcon key={item} style={{color: '#f68540'}} fontSize="small" />
            })}
        </StarsContainer>
    )
}
