import Popover, { PopoverProps } from '@material-ui/core/Popover'
import React, { FC, ReactNode } from 'react'
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
