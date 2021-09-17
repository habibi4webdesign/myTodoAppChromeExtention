//Material UI Components
import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@material-ui/core'
//Libraries
import React, { FC, ReactNode } from 'react'
//Styles
import useDialogStyle from './useDialogStyle'

interface IDialogProps extends DialogProps{
  handleClose: () => void
  open: boolean
  title?: string
  children: ReactNode
  actions?: ReactNode
}

const Dialog: FC<IDialogProps> = (props) => {
  const { handleClose, open, children, title, actions, ...rest } = props
  const classes = useDialogStyle()

  return (
    <MuiDialog
      className={classes.root}
      onClose={handleClose}
      aria-labelledby={`dialog-title-${title}`}
      open={open}
      {...rest}
    >
      {title && <DialogTitle id={`dialog-title-${title}`}>{title}</DialogTitle>}
      <DialogContent dividers>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  )
}

export default Dialog
