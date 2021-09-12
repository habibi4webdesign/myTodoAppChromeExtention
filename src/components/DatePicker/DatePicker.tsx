import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'
import React, { FC } from 'react'
import useDatePickerStyle from './useDatePickerStyle'
import DateFnsUtils from '@date-io/date-fns'

interface IDatePickerProps extends KeyboardDatePickerProps {
  onChange: (date: any, value?: string) => void
  value: ParsableDate
}

const DatePicker: FC<IDatePickerProps> = (props) => {
  const { onChange, value, ...rest } = props
  const classes = useDatePickerStyle()

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        value={value}
        onChange={onChange}
        className={classes.root}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker
