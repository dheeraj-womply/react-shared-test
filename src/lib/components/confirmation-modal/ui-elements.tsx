import React from 'react';
import { ConfirmationModalComponent } from './interfaces';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import {Button} from "../button";


export const ConfirmationModal: React.FC<ConfirmationModalComponent> = (props) => {
    const {
        isModalOpen = false,
        isMobile = false,
        title,
        content,
        primaryButtonText,
        onPrimaryButtonClick,
        secondaryButtonText,
        onSecondaryButtonClick
    } = props

    return (
        <Dialog
            open={isModalOpen}
            maxWidth="xs"
            fullWidth={true}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                <Button
                    data-testid="secondary-btn"
                    color="primary"
                    variant="text"
                    fullWidth={isMobile}
                    onClick={onSecondaryButtonClick}
                    disableRipple
                >
                    {secondaryButtonText}
                </Button>
                <Button
                    data-testid="primary-btn"
                    fullWidth={isMobile}
                    disableRipple
                    variant="contained"
                    color="primary"
                    onClick={onPrimaryButtonClick}
                >
                    {primaryButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
