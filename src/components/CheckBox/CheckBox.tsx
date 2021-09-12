import { Checkbox, CheckboxProps } from '@material-ui/core'
import React, { FC } from 'react'
import useCheckBoxStyle from './useCheckBoxStyle'

interface ICheckBoxProps extends CheckboxProps {}

const CheckBox: FC<ICheckBoxProps> = (props) => {
  const { ...others } = props
  const classes = useCheckBoxStyle()

  return <Checkbox className={classes.root} {...{ ...others }} />
}

export default CheckBox
