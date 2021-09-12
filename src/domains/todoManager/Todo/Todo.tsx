import React, { FC } from 'react'
import { ITodo } from 'domains/todoManager/types'
import useTodoStyle from './useTodoStyle'
import CheckBox from 'components/CheckBox'

interface ITodoProps {
  todo: ITodo
  onTodoStatus: (e: any, id: string) => void
}

const Todo: FC<ITodoProps> = (props) => {
  const { todo, onTodoStatus } = props
  const classes = useTodoStyle({ todo })

  return (
    <div className={classes.root}>
      <span className={classes.name}>{todo.name}</span>
      <span>
        <CheckBox
          color="primary"
          onChange={(e) => onTodoStatus(e, todo.id)}
          checked={todo.isDone}
        />
      </span>
    </div>
  )
}

export default Todo
