import React from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { Snackbar, Button as MuiButton } from '@material-ui/core'

export interface IToastProps {
    open: boolean
    message: string
    variant?: AlertProps['variant']
    severity?: AlertProps['severity']
    action?: React.ReactNode
    onClose: () => void
}

export const Toast: React.FC<IToastProps> = ({
    open,
    message,
    variant = 'filled',
    severity = 'info',
    action = 'OK',
    onClose,
}):JSX.Element => {
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') return
        onClose()
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={severity === 'error' ? null : 3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={handleClose}
        >
            <MuiAlert
                variant={variant}
                severity={severity}
                action={
                    <MuiButton
                        data-testid="toast-alert-action"
                        variant="outlined"
                        color="inherit"
                        size="small"
                        onClick={handleClose}
                    >
                        { action }
                    </MuiButton>
                }
            >
                { message }
            </MuiAlert>
        </Snackbar>
    )
}
