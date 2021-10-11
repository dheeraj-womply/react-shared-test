import MaskedInput from 'react-text-mask'
import React from 'react'
import { OutlinedTextFieldProps, TextField } from '@material-ui/core'

interface IPhoneInputProps extends OutlinedTextFieldProps {
  guide?: boolean
  showMask?: boolean
  inputMask?: Array<string>
}

const DEFAULT_MASK = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

const TextMaskCustom = (props: any) => {
  const { inputRef, guide, showMask, inputMask: mask, ...rest } = props

  return (
    <MaskedInput
      {...rest}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      guide={guide}
      showMask={showMask}
      mask={mask}
      placeholderChar={'\u2000'}
    />
  )
}

export const PhoneInput: React.FC<IPhoneInputProps> = ({
  InputProps,
  label = 'Phone',
  variant = 'outlined',
  guide = false,
  showMask = false,
  inputMask = DEFAULT_MASK,
  inputProps,
  ...rest
}) => (
  <TextField
    {...rest}
    label={label}
    variant={variant}
    InputProps={{
      ...InputProps,
      inputComponent: TextMaskCustom,
      inputProps: { ...inputProps, guide, showMask, inputMask }
    }}
  />
)
