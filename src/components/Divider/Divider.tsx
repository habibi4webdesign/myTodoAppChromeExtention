import React, { FC } from 'react'
import useDividerStyle from './useDividerStyle'

interface IDividerProps {}

const Divider: FC<IDividerProps> = (props) => {
  const classes = useDividerStyle()

  return <div className={classes.root} />
}

export default Divider
