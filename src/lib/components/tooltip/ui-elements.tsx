import React from 'react'
import {Tooltip as MuiTooltip, TooltipProps, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  arrow: {
    color: '#2D3436',
  },
  tooltip: {
    backgroundColor: '#2D3436',
    padding: 10,
    fontSize: 14
  },
}))

export const Tooltip: React.FC<TooltipProps> = ({ children, ...rest }) => {
  const classes = useStyles()

  return (
    <MuiTooltip {...rest} classes={classes}>
      {children}
    </MuiTooltip>
  )
}
