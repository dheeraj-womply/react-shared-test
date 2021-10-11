import React, { MutableRefObject, useRef, useState } from 'react'
import {
    IconButton,
    TextField,
    TextFieldProps
} from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { IconButtonProps } from "@material-ui/core/IconButton"

interface InputButtonProps extends IconButtonProps {
    'data-testid'?: string
}

interface VisibilityProps {
    inputRef: MutableRefObject<HTMLInputElement | undefined>
    isShowPassword: boolean
    setIsShowPassword: (state: boolean) => void
    inputBtnProps?: InputButtonProps
}

interface InputProps {
    isPassword?: boolean
    // pass inputBtnProps only if isPassword is true
    inputBtnProps?: InputButtonProps
}

type TextInputProps = InputProps & TextFieldProps

const VisibilityButton: React.FC<VisibilityProps> = ({ inputRef, isShowPassword, setIsShowPassword, inputBtnProps }) => {
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault()
    const handleClick = () => {
        inputRef?.current?.focus()
        setIsShowPassword(!isShowPassword)
    }

    return (
        <IconButton
            disableRipple
            aria-label="toggle password visibility"
            onClick={handleClick}
            onMouseDown={handleMouseDownPassword}
            tabIndex="-1"
            {...inputBtnProps}
        >
            {isShowPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
    )
}

const resetInputAppearance = {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    boxShadow: 'none',
}

export const TextInput: React.FC<TextInputProps> = ({ variant = "outlined" as any, isPassword = false, InputProps: MaterialTextInputProps, inputBtnProps, ...rest }) => {
    const [ isShowPassword, setIsShowPassword ] = useState<boolean>(false)

    const inputRef = useRef()

    // pass inputProps to add props or data attributes for an input
    // pass inputBtnProps to add props or data attributes for a hide/show password button (only if isPassword is true)
    // pass any other props to the TextInput to add props or data attributes for a TextField MUI component

    return (
        <TextField
            inputRef={inputRef}
            variant={variant}
            type={isPassword && !isShowPassword ? 'password' : 'text'}
            // @ts-ignore
            InputProps={{
                ...MaterialTextInputProps,
                endAdornment: (isPassword && (
                    <VisibilityButton
                        inputRef={inputRef}
                        inputBtnProps={inputBtnProps}
                        isShowPassword={isShowPassword}
                        setIsShowPassword={setIsShowPassword}
                    />
                )),
                style: { ...resetInputAppearance, ...MaterialTextInputProps?.style }
            }}
            {...rest}
        />
    );
};
