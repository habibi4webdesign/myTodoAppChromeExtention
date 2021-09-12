import { Typography } from '@material-ui/core'
import Accordion from 'components/Accordion'
import Divider from 'components/Divider'
import AddTodo from 'domains/todoManager/AddTodo'
import Todo from 'domains/todoManager/Todo'
import { ITodo } from 'domains/todoManager/types'
import React, { useState } from 'react'

const TodoManager = () => {
  const [todos, settodos] = useState<ITodo[]>([])

  const onAddTodo = (newTodo) => {
    const todo = { ...newTodo }
    settodos((preTodos) => [...preTodos, todo])
  }

  const onTodoStatus = (e, todoId) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isDone: e.target.checked } : todo,
    )
    settodos(newTodos)
  }

  return (
    <div>
      <AddTodo onAddTodo={onAddTodo} />
      {todos.map(
        (todo) =>
          !todo.isDone && (
            <Todo key={todo.id} onTodoStatus={onTodoStatus} todo={todo} />
          ),
      )}
      {todos.some((todo) => todo.isDone) && (
        <>
          <Divider />
          <Accordion defaultExpanded summery="Completed">
            <Typography variant="body1">
              {todos.map(
                (todo) =>
                  todo.isDone && (
                    <Todo
                      key={todo.id}
                      onTodoStatus={onTodoStatus}
                      todo={todo}
                    />
                  ),
              )}
            </Typography>
          </Accordion>
        </>
      )}
    </div>
  )
}

export default TodoManager
