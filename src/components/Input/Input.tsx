import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import React, { FC, ReactNode } from 'react'
import useInputStyle from './useInputStyle'

interface IInputProps extends Omit<TextFieldProps, 'error'> {
  error?: ReactNode
}

const Input: FC<IInputProps> = (props) => {
  const { error, ...others } = props
  const classes = useInputStyle()

  return (
    <TextField
      {...{
        error: !!error,
        ...(others as any),
      }}
      className={classes.root}
    />
  )
}

export default Input
