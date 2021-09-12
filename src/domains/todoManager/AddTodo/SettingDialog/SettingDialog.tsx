import { Typography } from '@material-ui/core'
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'
import Button from 'components/Button'
import CheckBox from 'components/CheckBox'
import DatePicker from 'components/DatePicker'
import Dialog from 'components/Dialog'
import TimePicker from 'components/TimePicker'
import React, { FC } from 'react'
import useSettingDialogStyle from './useSettingDialogStyle'

interface ISettingDialogProps {
  onConfirmTodoSetting: () => void
  onCancelTodoSetting: () => void
  onSettingModalClose: () => void
  onDateChange: (date: Date | null) => void
  onRepeatTodo: () => void
  showTodoSettingModel: boolean
  selectedDate: ParsableDate
}

const SettingDialog: FC<ISettingDialogProps> = (props) => {
  const {
    onConfirmTodoSetting,
    onCancelTodoSetting,
    onSettingModalClose,
    onDateChange,
    onRepeatTodo,
    showTodoSettingModel,
    selectedDate,
  } = props

  const classes = useSettingDialogStyle()

  const DialogActions = () => {
    return (
      <div className={classes.dialogActionsWrapper}>
        <Button onClick={onConfirmTodoSetting} variant="contained">
          Cancel
        </Button>
        <Button
          onClick={onCancelTodoSetting}
          variant="contained"
          color="primary"
        >
          Confirm
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Dialog
        actions={<DialogActions />}
        open={showTodoSettingModel}
        handleClose={onSettingModalClose}
      >
        <Typography className={classes.settingModalTitle} variant="h6">
          Todo Settings
        </Typography>
        <DatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={onDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <TimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={onDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <div className={classes.control}>
          <Typography
            className={classes.settingModalRepeat}
            variant="subtitle1"
          >
            Repeat
          </Typography>
          <CheckBox color="primary" onChange={onRepeatTodo} checked={true} />
        </div>
      </Dialog>
    </div>
  )
}

export default SettingDialog
