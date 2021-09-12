import React, { FC, ReactNode } from 'react'
import { Button as MuiButton, ButtonProps } from '@material-ui/core'

interface IButtonProps extends ButtonProps {
  children: ReactNode
}

const Button: FC<IButtonProps> = (props) => {
  const { children, ...rest } = props

  return <MuiButton {...rest}>{children}</MuiButton>
}

export default Button
