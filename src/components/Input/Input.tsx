//Material UI Components
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
//Libraries
import React, { FC, ReactNode } from 'react'
import cs from 'classnames'
//Styles
import useInputStyle from './useInputStyle'

interface IInputProps extends Omit<TextFieldProps, 'error'> {
  error?: ReactNode
}

const Input: FC<IInputProps> = (props) => {
  const { error, className, ...rest } = props
  const classes = useInputStyle()

  return (
    <TextField
      {...{
        error: !!error,
        ...(rest as any),
      }}
      className={cs(classes.root, className)}
    />
  )
}

export default Input
