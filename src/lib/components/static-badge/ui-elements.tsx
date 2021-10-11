import React from "react";
import {Badge, BadgeProps, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

type StaticBadgeProps = Pick<BadgeProps, Exclude<keyof BadgeProps, 'color'>> & { color?: string; bgcolor?: string; }

const useStaticBadgeStyles = makeStyles({
    root: (props: StaticBadgeProps) => ({
        color: 'inherit',
        '&& .MuiBadge-badge': {
            color: `${!props.color || props.color === 'default' ? '#99a5aa' : ''}`,
            backgroundColor: `${
                props.bgcolor ||
                (!props.color || props.color === 'default'
                    ? '#f5f6f5'
                    : ['primary', 'secondary', 'error'].includes(props.color) ? '' : '#fff')
            }`,
            position: 'static',
            transform: 'none',
            height: 24,
            minWidth: 24,
            borderRadius: 12
        }
    })
})

export const StaticBadge:React.FC<StaticBadgeProps> = (props) => {
    const classes = useStaticBadgeStyles(props)
    const color = (
        props.color && ['default', 'primary', 'secondary', 'error'].includes(props.color) ?
            props.color as 'default' | 'primary' | 'secondary' | 'error' :
            undefined
    )
    const badgeProps = { ...props, color}

    return (
        <Box color={props.color}>
            <Badge {...badgeProps} className={classes.root} />
        </Box>
    )
}
