import SettingsIcon from '@material-ui/icons/Settings'
import Input from 'components/Input'
import useSetting from 'domains/todoManager/AddTodo/hooks/useSetting'
import SettingDialog from 'domains/todoManager/AddTodo/SettingDialog'
import { ITodo } from 'domains/todoManager/types'
import React, { FC, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useAddTodoStyle from './useAddTodoStyle'
interface IAddTodoProps {
  onAddTodo: (todo: ITodo) => void
}

const AddTodo: FC<IAddTodoProps> = (props) => {
  const { onAddTodo } = props
  const classes = useAddTodoStyle()
  const [addTodoInputValue, setaddTodoInputValue] = useState<string>('')

  /* #region custom hooks*/
  const {
    confirmedDateAndTime,
    showTodoSettingModel,
    onSettingModalClose,
    onRepeatTodo,
    onDateChange,
    confirmTodoSetting,
    cancelTodoSetting,
    showDialogHandler,
    onTimeChange,
    selectedDate,
    selectedTime,
    repeat,
    setrepeat,
  } = useSetting()
  /*#endregion custom hooks*/

  const todoDate = useMemo(
    () => new Date(confirmedDateAndTime.date).toLocaleDateString(),
    [confirmedDateAndTime.date],
  )

  const todoTime = useMemo(
    () =>
      new Date(confirmedDateAndTime.time).toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }),
    [confirmedDateAndTime.time],
  )

  const onKeyPressInput = (e) => {
    if (e.key === 'Enter') {
      onAddTodo({
        id: uuidv4(),
        name: e.target.value,
        isDone: false,
        date: todoDate,
        time: todoTime,
        repeat,
      })

      setaddTodoInputValue('')
      setrepeat(false)
      e.preventDefault()
    }
  }

  return (
    <>
      <div className={classes.input}>
        <Input
          inputProps={{ maxLength: 60 }}
          onChange={(e) => {
            setaddTodoInputValue(e.target.value)
          }}
          value={addTodoInputValue}
          label="+ What would you like to do?"
          onKeyPress={onKeyPressInput}
        />

        <div className={classes.inputDateWrapper}>
          <span>
            {todoDate} {todoTime}
          </span>
          <SettingsIcon
            onClick={showDialogHandler}
            className={classes.settingIcon}
          />
        </div>
      </div>
      <SettingDialog
        onConfirmTodoSetting={confirmTodoSetting}
        onCancelTodoSetting={cancelTodoSetting}
        onSettingModalClose={onSettingModalClose}
        showTodoSettingModel={showTodoSettingModel}
        onRepeatTodo={onRepeatTodo}
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        repeatTodo={repeat}
      />
    </>
  )
}

export default AddTodo
