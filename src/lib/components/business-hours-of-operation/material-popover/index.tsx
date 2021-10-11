import React, { useEffect } from 'react';
import Popover from '@material-ui/core/Popover';

export const MaterialPopover: React.FC<{element: HTMLElement | null, onClose:()=>void, children?: any}> = ({ element, onClose, children }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    useEffect(()=>{
        setAnchorEl(element);
    }, [element] );
    
    
    const handleClose = () => onClose();

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
    >
        {children}
    </Popover>
    )
}
