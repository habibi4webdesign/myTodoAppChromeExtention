//Material UI Components
import { Checkbox, CheckboxProps } from '@material-ui/core'
//Libraries
import React, { FC } from 'react'
//Styles
import useCheckBoxStyle from './useCheckBoxStyle'

interface ICheckBoxProps extends CheckboxProps {}

const CheckBox: FC<ICheckBoxProps> = (props) => {
  const { ...RestorePageRounded } = props
  const classes = useCheckBoxStyle()

  return <Checkbox className={classes.root} {...RestorePageRounded} />
}

export default CheckBox
