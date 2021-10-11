import React, { CSSProperties, useEffect, useRef } from 'react';
import ReactCodeInput, { ReactCodeInputProps } from "react-code-input";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ERROR_MAIN_COLOR, PRIMARY_MAIN_COLOR } from "../../themes/default-styles";
import clsx from "clsx";

const inputStyles6fields = {
    border: 'none',
    borderBottom: `2px solid ${PRIMARY_MAIN_COLOR}`,
    marginRight: '9px',
    padding: '6px 12px',
    fontSize: '32px',
    color: '#000000',
    outline: 'none',
    width: 'auto',
    maxWidth: '44px',
    display: 'flex',
}

const inputStyles9fields = {
    border: 'none',
    borderBottom: `2px solid ${PRIMARY_MAIN_COLOR}`,
    marginRight: '9px',
    padding: '5px 0',
    fontSize: '28px',
    color: '#000000',
    outline: 'none',
    width: 'auto',
    maxWidth: '28px',
    textAlign: 'center' as const,
}

const inputStylesInvalid6fields = {
    border: 'none',
    borderBottom: `2px solid ${ERROR_MAIN_COLOR}`,
    marginRight: '9px',
    padding: '6px 12px',
    fontSize: '32px',
    color: ERROR_MAIN_COLOR,
    outline: 'none',
    width: 'auto',
    maxWidth: '44px',
    display: 'flex',
}

const inputStylesInvalid9fields = {
    border: 'none',
    borderBottom: `2px solid ${ERROR_MAIN_COLOR}`,
    marginRight: '9px',
    padding: '5px 0',
    fontSize: '28px',
    color: ERROR_MAIN_COLOR,
    outline: 'none',
    width: 'auto',
    maxWidth: '28px',
    textAlign: 'center' as const,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        codeInputsContainer: {
            display: 'flex !important',
            width: '100%',
            justifyContent: 'space-between',
            '& > input:last-child': {
                marginRight: '0 !important'
            },
            '& > input[value=""]': {
                borderBottom: `2px solid ${theme.palette.grey[theme.palette.type === 'light' ? 300 : 700]} !important`
            },
            '& > input:focus': {
                borderBottom: `2px solid ${theme.palette.primary.main} !important`
            },
            '& > input[data-valid="false"]:focus': {
                borderBottom: `2px solid ${theme.palette.error.main} !important`
            },
            '& > input::placeholder': {
                color: theme.palette.grey[theme.palette.type === 'light' ? 300 : 700]
            },
            '& > input::selection': {
                background: '#fff',
                color: theme.palette.primary.main
            },
            '& > input[data-valid="false"]::selection': {
                color: `${theme.palette.error.main} !important`
            },
            '& > input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '& > input[type=number]': {
                '-moz-appearance': 'textfield'
            }
        },
    }
))

export interface ICodeInput extends ReactCodeInput {
    textInput: HTMLInputElement[]
}

export interface CodeInputState extends ReactCodeInputProps {
    input: string[]
    defaultInputStyle: CSSProperties
}

/**
 The optional 'value' prop expects a string format. When the component is rendered for the first time,
 the value displayed will be the string initially provided via this prop (if provided).
 After the first rendering, only an empty string being provided via this prop will cause the component to re-render.
 In short, the 'value' prop can be used to set any value as the initial display value,
 but afterwards it can only update the display value to be an empty string (any other values provided will be ignored).
 **/

export const VerificationCodeInput: React.FC<ReactCodeInputProps> = ({
    autoFocus = false,
    placeholder = "",
    inputStyle,
    fields = 6,
    className,
    value,
    ...restProps
}):JSX.Element => {
    const classes = useStyles()
    const inputsRef = useRef<ICodeInput>(null)

    useEffect(() => {
        if (inputsRef?.current?.textInput){
            const textInputs = inputsRef.current.textInput
            textInputs.forEach((node: HTMLInputElement) => node.setAttribute('placeholder', placeholder));
        }
    }, [placeholder])

    useEffect(() => {
        if (value === '' && inputsRef?.current) {
            inputsRef.current.setState((prevState: CodeInputState) => {
                const inputState = prevState.input.map(() => '')
                return {
                    ...prevState,
                    input: inputState
                }
            })
        }
        if (value && inputsRef?.current) {
            for (let i = 0; i < value.length; i++) {
                inputsRef.current.textInput[i + 1]?.focus()
            }
        }
    }, [value])

    const inputStyles = fields === 9 ? inputStyles9fields : inputStyles6fields
    const inputStylesInvalid = fields === 9 ? inputStylesInvalid9fields : inputStylesInvalid6fields

    return (
        <ReactCodeInput
            ref={inputsRef}
            inputStyle={inputStyles}
            inputStyleInvalid={inputStylesInvalid}
            className={clsx(classes.codeInputsContainer, className)}
            autoFocus={autoFocus}
            fields={fields}
            value={value}
            {...restProps}
        />
    )
};
