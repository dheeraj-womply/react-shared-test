import React from 'react'
import clsx from 'clsx'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { OverlayComponent } from './interfaces'

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100%',
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
        opacity: 0.6,
        zIndex: 10,
        '&&.allow-user-actions': {
            pointerEvents: 'none',
        },
    },
    circularProgress: {
        position: 'relative',
    },
})

export const Overlay: React.FC<OverlayComponent> = (props): JSX.Element => {
    const {
        children,
        show = false,
        allowUserActions = false,
        hideSpinner = false,
        spinnerTop = '50%',
        rootStyles,
    } = props
    const classes = useStyles()

    return (
        <div className={clsx(classes.root, rootStyles)}>
            {show &&
            <div className={[classes.container, `${allowUserActions ? 'allow-user-actions' : ''}`].filter(e => e).join(' ')}>
                {!hideSpinner &&
                    <CircularProgress
                        data-testid={'overlay-spinner'}
                        className={classes.circularProgress}
                        style={{ top: `calc(${spinnerTop} - 20px)` }}
                    />
                }
            </div>
            }
            {children}
        </div>
    )
}
