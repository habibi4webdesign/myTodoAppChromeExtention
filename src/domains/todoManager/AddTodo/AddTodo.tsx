import Input from 'components/Input'
import { ITodo } from 'domains/todoManager/types'
import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface IAddTodoProps {
  onAddTodo: (todo: ITodo) => void
}

const AddTodo: FC<IAddTodoProps> = (props) => {
  const { onAddTodo } = props

  const onKeyPressInput = (e) => {
    if (e.key === 'Enter') {
      onAddTodo({
        id: uuidv4(),
        name: e.target.value,
        isDone: false,
      })
      e.preventDefault()
    }
  }
  return (
    <Input label="What would you like to do?" onKeyPress={onKeyPressInput} />
  )
}

export default AddTodo
