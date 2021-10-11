import React from "react";
import {
    Button as MuiButton, ButtonProps,
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        fontSize: 14,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
})

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        color = 'primary',
        size = 'large',
        variant = 'contained',
        startIcon,
        ...rest
    } = props

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = props.classes ? { ...useStyles(), ...props.classes } : useStyles()

    return (
        <MuiButton
            {...rest}
            color={color}
            size={size}
            startIcon={startIcon}
            variant={variant}
            classes={classes}
        />
    )
}



