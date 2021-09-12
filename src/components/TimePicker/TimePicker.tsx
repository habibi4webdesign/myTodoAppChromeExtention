import {
  KeyboardTimePicker,
  KeyboardTimePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'
import React, { FC } from 'react'
import useTimePickerStyle from './useTimePickerStyle'
import DateFnsUtils from '@date-io/date-fns'

interface ITimePickerProps extends KeyboardTimePickerProps {
  onChange: (date: any, value?: string) => void
  value: ParsableDate
}

const TimePicker: FC<ITimePickerProps> = (props) => {
  const { onChange, value, ...rest } = props
  const classes = useTimePickerStyle()

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        value={value}
        onChange={onChange}
        className={classes.root}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  )
}

export default TimePicker
