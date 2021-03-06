//Material UI Components
import { Typography } from '@material-ui/core'
//UI Componets
import Button from 'components/Button'
import CheckBox from 'components/CheckBox'
import DatePicker from 'components/DatePicker'
import Dialog from 'components/Dialog'
import TimePicker from 'components/TimePicker'
//Libraries
import React, { FC } from 'react'
//Styles
import useSettingDialogStyle from './useSettingDialogStyle'
//Types
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'

interface ISettingDialogProps {
  onConfirmTodoSetting: () => void
  onCancelTodoSetting: () => void
  onSettingModalClose: () => void
  onDateChange: (date: Date | null) => void
  onRepeatTodo: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void
  showTodoSettingModel: boolean
  selectedDate: ParsableDate
  onTimeChange: (date: Date | null) => void
  selectedTime: ParsableDate
  repeatTodo: boolean
}

const SettingDialog: FC<ISettingDialogProps> = (props) => {
  const {
    onConfirmTodoSetting,
    onCancelTodoSetting,
    onSettingModalClose,
    onRepeatTodo,
    onDateChange,
    onTimeChange,
    selectedDate,
    selectedTime,
    showTodoSettingModel,
    repeatTodo,
  } = props

  const classes = useSettingDialogStyle()

  const DialogActions = () => {
    return (
      <div className={classes.dialogActionsWrapper}>
        <Button onClick={onCancelTodoSetting} variant="contained">
          Cancel
        </Button>
        <Button
          onClick={onConfirmTodoSetting}
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
        {!repeatTodo ? (
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
        ) : (
          <Typography className={classes.settingEveryDay} variant="subtitle1">
            Every Day
          </Typography>
        )}
        <TimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedTime}
          onChange={onTimeChange}
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
          <CheckBox
            color="primary"
            onChange={onRepeatTodo}
            checked={repeatTodo}
          />
        </div>
      </Dialog>
    </div>
  )
}

export default SettingDialog
