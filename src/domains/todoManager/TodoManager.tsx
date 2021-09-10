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
    settodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isDone: e.target.checked } : todo,
      ),
    )
  }

  return (
    <div>
      <AddTodo onAddTodo={onAddTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} onTodoStatus={onTodoStatus} todo={todo} />
      ))}
    </div>
  )
}

export default TodoManager
