import SettingsIcon from '@material-ui/icons/Settings'
import Input from 'components/Input'
import useSetting from 'domains/todoManager/AddTodo/hooks/useSetting'
import SettingDialog from 'domains/todoManager/AddTodo/SettingDialog'
import { ITodo } from 'domains/todoManager/types'
import React, { FC, useState } from 'react'
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
    selectedDate,
    showTodoSettingModel,
    onSettingModalClose,
    onRepeatTodo,
    onDateChange,
    confirmTodoSetting,
    cancelTodoSetting,
    showDialogHandler,
  } = useSetting()
  /*#endregion custom hooks*/

  const onKeyPressInput = (e) => {
    if (e.key === 'Enter') {
      onAddTodo({
        id: uuidv4(),
        name: e.target.value,
        isDone: false,
      })
      setaddTodoInputValue('')
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

        <SettingsIcon
          onClick={showDialogHandler}
          className={classes.settingIcon}
        />
      </div>
      <SettingDialog
        onConfirmTodoSetting={confirmTodoSetting}
        onCancelTodoSetting={cancelTodoSetting}
        onSettingModalClose={onSettingModalClose}
        onDateChange={onDateChange}
        onRepeatTodo={onRepeatTodo}
        showTodoSettingModel={showTodoSettingModel}
        selectedDate={selectedDate}
      />
    </>
  )
}

export default AddTodo
