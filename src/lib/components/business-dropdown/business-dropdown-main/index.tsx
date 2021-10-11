import React, { useCallback } from 'react'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { BusinessDropdownContainer } from './business-dropdown'
import * as Interfaces from '../interfaces'

const useStyles = makeStyles(() =>
    createStyles({
        formControl: {
            minWidth: 120,
            width: '100%'
        }
    })
)

export const BusinessDropdown: React.FC<Interfaces.IBusinessDropdown> = ({data, handleChange}) => {
    const classes = useStyles()

    const getBusinessLocationLabel = useCallback((location: any): string => {
        const addressWithoutZip = [location.address.address1, location.address.city, location.address.state].filter(e => e).join(', ')
        const address = [addressWithoutZip, location.address.zip].filter(e => e).join(' ')
        const label = [location.name, address].filter(e => e).join(': ')
        return label
    }, [])

    return (
        <BusinessDropdownContainer>
            <FormControl className={classes.formControl}>
                <Select
                    MenuProps={{
                        anchorOrigin: {
                            vertical: 39,
                            horizontal: 0
                        },
                        transformOrigin: {
                            vertical: 0,
                            horizontal: 0
                        },
                        getContentAnchorEl: null
                    }}
                    value={data.activeLocation ? data.activeLocation : ''}
                    onChange={handleChange}
                >
                    {data.businessDropdown.map((location: any, index: number) => (
                    <MenuItem key={index} value={location}>
                        <span>{getBusinessLocationLabel(location)}</span>
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </BusinessDropdownContainer>
    )
}