import Input from 'components/Input'
import { ITodo } from 'domains/todoManager/types'
import React, { FC, useState } from 'react'
import useAddTodoStyle from './useAddTodoStyle'
import { v4 as uuidv4 } from 'uuid'

interface IAddTodoProps {
  onAddTodo: (todo: ITodo) => void
}

const AddTodo: FC<IAddTodoProps> = (props) => {
  const { onAddTodo } = props
  const [addTodoInputValue, setaddTodoInputValue] = useState('')
  const classes = useAddTodoStyle()

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
    <div className={classes.root}>
      <Input
        inputProps={{ maxLength: 60 }}
        onChange={(e) => {
          setaddTodoInputValue(e.target.value)
        }}
        value={addTodoInputValue}
        label="+ What would you like to do?"
        onKeyPress={onKeyPressInput}
      />
      <Input
        className={classes.datePicker}
        id="datetime-local"
        label="date and time"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}

export default AddTodo
