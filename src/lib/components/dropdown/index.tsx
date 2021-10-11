import React from 'react'
import { Select, FormControl, InputLabel, MenuItem, SelectProps } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { isEmpty } from 'lodash'

export interface DropdownOption {
  title: React.ReactNode
  value: string
}

export type DropdownProps = SelectProps & {
  options: DropdownOption[]
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  labelId,
  ...restProps
}): JSX.Element => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        data-testid="dropdown-container"
        label={label}
        labelId={labelId}
        IconComponent={KeyboardArrowDownIcon}
        //@ts-ignore
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: -8,
            horizontal: -14
          },
        }}
        {...restProps}
      >
        {!isEmpty(options) && options.map((option) => (
          <MenuItem
            value={option.value}
            key={option.value}
            data-testid={`dropdown-testid-${option.value}`}
            style={{ padding: '10px 16px' }}
          >
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
