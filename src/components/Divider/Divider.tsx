//Libraries
import React from 'react'
//Styles
import useDividerStyle from './useDividerStyle'

const Divider = () => {
  const classes = useDividerStyle()

  return <div className={classes.root} />
}

export default Divider
