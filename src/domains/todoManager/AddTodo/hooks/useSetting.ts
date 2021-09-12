import { useState } from 'react'

const useSetting = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [showTodoSettingModel, setshowTodoSettingModel] =
    useState<boolean>(false)

  const onSettingModalClose = () => {}

  const onRepeatTodo = () => {}

  const onDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const confirmTodoSetting = () => {
    setshowTodoSettingModel(false)
  }

  const cancelTodoSetting = () => {
    setshowTodoSettingModel(false)
  }

  const showDialogHandler = () => {
    setshowTodoSettingModel(true)
  }

  return {
    selectedDate,
    showTodoSettingModel,
    onSettingModalClose,
    onRepeatTodo,
    onDateChange,
    confirmTodoSetting,
    cancelTodoSetting,
    showDialogHandler,
  }
}

export default useSetting
