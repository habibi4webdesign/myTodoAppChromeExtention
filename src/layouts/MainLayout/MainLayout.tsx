import React, { FC, ReactNode } from 'react'
import useInputStyle from './useMainLayoutStyle'

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = (props) => {
  const { children } = props
  const classes = useInputStyle()

  return (
    <div className={classes.root}>
      {/* <div className={classes.sidebar}>sidebar</div> */}
      <div className={classes.content}> {children}</div>
    </div>
  )
}

export default MainLayout
