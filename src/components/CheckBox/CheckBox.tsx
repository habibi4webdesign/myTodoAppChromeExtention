import { Checkbox, CheckboxProps } from '@material-ui/core'
import React, { FC } from 'react'

interface ICheckBoxProps extends CheckboxProps {}

const CheckBox: FC<ICheckBoxProps> = (props) => {
  const { ...others } = props

  return <Checkbox {...{ ...others }} />
}

export default CheckBox
