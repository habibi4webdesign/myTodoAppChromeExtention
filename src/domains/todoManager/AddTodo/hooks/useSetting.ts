import { useState } from 'react'
interface IconfirmedDateAndTime {
  date: Date
  time: Date
}

const useSetting = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [selectedTime, setselectedTime] = useState<Date | null>(new Date())
  const [confirmedDateAndTime, setconfirmedDateAndTime] =
    useState<IconfirmedDateAndTime>({
      date: new Date(),
      time: new Date(),
    })

  const [showTodoSettingModel, setshowTodoSettingModel] =
    useState<boolean>(false)

  const onSettingModalClose = () => {
    setshowTodoSettingModel(false)
  }

  const onRepeatTodo = () => {}

  const onDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const onTimeChange = (date: Date | null) => {
    setselectedTime(date)
  }

  const confirmTodoSetting = () => {
    setshowTodoSettingModel(false)
    setconfirmedDateAndTime({
      date: selectedDate,
      time: selectedTime,
    })
  }

  const cancelTodoSetting = () => {
    setshowTodoSettingModel(false)
  }

  const showDialogHandler = () => {
    setshowTodoSettingModel(true)
  }

  return {
    confirmedDateAndTime,
    onSettingModalClose,
    onRepeatTodo,
    onDateChange,
    confirmTodoSetting,
    cancelTodoSetting,
    showDialogHandler,
    showTodoSettingModel,
    selectedDate,
    selectedTime,
    onTimeChange,
  }
}

export default useSetting
