//Libraries
import React, { FC } from 'react'
//Material UI Components
import { Tooltip as MuiTooltip, TooltipProps } from '@material-ui/core'

interface ITooltipProps extends TooltipProps {}

const Tooltip: FC<ITooltipProps> = (props) => {
  const { children, ...rest } = props

  return <MuiTooltip {...rest}>{children}</MuiTooltip>
}

export default Tooltip
