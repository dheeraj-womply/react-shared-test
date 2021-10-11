import React from 'react'
import MUISwitch, { SwitchClassKey, SwitchProps as MUISwitchProps } from '@material-ui/core/Switch'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { LIGHT_GRAY_COLOR, MEDIUM_GRAY_COLOR } from "../../themes/default-styles";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string
}

interface Props extends MUISwitchProps {
    classes: Styles
}

export interface SwitchProps {
    checked: boolean
    onChange: () => void
    disabled?: boolean
    className?: string
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled, className }): JSX.Element => {
    const IOSSwitch = withStyles((theme: Theme) =>
        createStyles({
            root: {
                width: 40,
                height: 24,
                padding: 0,
                margin: theme.spacing(1),
            },
            switchBase: {
                'top': '3px',
                'left': '-2px',
                'padding': 1,
                '&$checked': {
                    'transform': 'translateX(20px)',
                    'color': `${disabled ? MEDIUM_GRAY_COLOR : theme.palette.common.white} !important`,
                    '& + $track': {
                        backgroundColor: `${disabled ? LIGHT_GRAY_COLOR : theme.palette.secondary.main} !important`,
                        opacity: '1 !important',
                        border: 'none',
                    },
                },
                '&$focusVisible $thumb': {
                    color: '#52d869',
                    border: `6px solid ${theme.palette.common.white}`,
                },
                'transform': 'translateX(6px)',
                'color': `${disabled ? MEDIUM_GRAY_COLOR : theme.palette.common.white} !important`,
            },
            thumb: {
                width: 16,
                height: 16,
                boxShadow: 'none'
            },
            track: {
                borderRadius: 26 / 2,
                border: disabled ? 'none' : `1px solid ${theme.palette.grey[400]}`,
                backgroundColor: `${disabled ? LIGHT_GRAY_COLOR : MEDIUM_GRAY_COLOR} !important`,
                opacity: '1 !important',
                transition: theme.transitions.create(['background-color', 'border']),
            },
            checked: {},
            focusVisible: {},
        })
    )(({ classes, ...props }: Props) => {
        return (
            <MUISwitch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        )
    })

    return (
        <IOSSwitch
            onChange={onChange}
            checked={checked}
            disabled={disabled}
            className={className}
        />
    )
}
