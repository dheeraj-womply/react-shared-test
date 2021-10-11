import React from 'react'
import { Box, CircularProgress, CircularProgressProps } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import styled from 'styled-components'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bottom: {
            color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
        },
        top: {
            animationDuration: '550ms',
            position: 'absolute',
            left: 0
        },
        circle: {
            strokeLinecap: 'round'
        }
    })
)

const ProgressText = styled.span`
  font-size: 12px;
  font-weight: bold;
`

const ableToBeNormalized = (value: any): boolean => {
    if (['number', 'string'].includes(typeof value)) {
        const val = +value
        return val === 0 || (Math.round(val) > 0 && Math.round(val) <= 100)
    }
    return true
}

const normalize = (value: any): number => {
    if (['number', 'string'].includes(typeof value)) {
        return Math.round(+value)
    }
    return 0
}

/**
 * The 'value' prop is expected to be an integer between 0 and 100, where the type is 'number'.
 * If a string is provided and it can be converted to a number between 0 and 100, that is also supported.
 * Any non-integer will be rounded to the nearest integer.
*/
export const CircularPercentageProgress: React.FC<CircularProgressProps> = (props) => {
    const classes = useStyles()

    return (
        <>
        {ableToBeNormalized(props.value) &&
            <Box position="relative" display="inline-flex">
                <Box position="relative" display="flex">
                    <CircularProgress
                        variant="static"
                        size={50}
                        thickness={5}
                        value={100}
                        className={classes.bottom}
                    />
                    <CircularProgress
                        variant="static"
                        size={50}
                        thickness={5}
                        {...props}
                        value={normalize(props.value)}
                        className={classes.top}
                        classes={{
                            circle: classes.circle
                        }}
                    />
                </Box>
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <ProgressText>{`${normalize(props.value)}%`}</ProgressText>
                </Box>
            </Box>
        }
        </>
    )
}
