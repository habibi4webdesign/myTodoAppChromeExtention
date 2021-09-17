//Material UI Components
import Popover, { PopoverProps } from '@material-ui/core/Popover'
//Libraries
import React, { FC, ReactNode } from 'react'
//Styles
import usePopOverStyle from './usePopOverStyle'

interface IPopOver extends PopoverProps {
  children: ReactNode
}

const PopOver: FC<IPopOver> = (props) => {
  const { children, ...rest } = props
  const classes = usePopOverStyle()

  return (
    <Popover className={classes.root} {...rest}>
      {children}
    </Popover>
  )
}

export default PopOver
