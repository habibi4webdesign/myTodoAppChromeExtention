import Accordion from 'components/Accordion'
import Divider from 'components/Divider'
import AddTodo from 'domains/todoManager/AddTodo'
import Todo from 'domains/todoManager/Todo'
import { ITodo } from 'domains/todoManager/types'
import React, { useCallback, useEffect, useState } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import { toast } from 'react-toastify'
import { calculateDateCategory } from 'utils/dateAndTime'
interface ICategorizedTodo {
  yesterday: ITodo[]
  today: ITodo[]
  tomorrow: ITodo[]
  later: ITodo[]
  completed: ITodo[]
}

const TodoManager = () => {
  const [categorizedTodos, setcategorizedTodos] = useState<ICategorizedTodo>({
    yesterday: [],
    today: [],
    tomorrow: [],
    later: [],
    completed: [],
  })
  const { getAll, add, update, deleteRecord } = useIndexedDB('todos')

  useEffect(() => {
    getAll().then((todosFromDB: ITodo[]) => {
      const lastcategorizedTodos = {
        yesterday: [],
        today: [],
        tomorrow: [],
        later: [],
        completed: [],
      }

      //reads data from local DB(indexedDB) and categorize them by date
      for (const todo of todosFromDB) {
        const category = calculateDateCategory(todo.date)

        if (!todo.isDone) {
          lastcategorizedTodos[category] = [
            ...lastcategorizedTodos[category],
            todo,
          ]
        } else {
          lastcategorizedTodos.completed = [
            ...lastcategorizedTodos.completed,
            todo,
          ]
        }
      }

      setcategorizedTodos({ ...lastcategorizedTodos })
    })
  }, [])

  const onDeleteTodo = useCallback((todoId: string, todoCategory: string) => {
    //delete todo from local DB
    deleteRecord(todoId).then(
      () => {
        toast.success('todo deleted from local DataBase')
      },
      (error) => {
        toast.error(
          'Error has occurred and todo not deleted from local DataBase',
        )
        console.log(error)
      },
    )

    //delete todo from categorized todos state
    setcategorizedTodos((preTodos) => ({
      ...preTodos,
      [todoCategory]: [
        ...preTodos[todoCategory].filter((todo) => todo.id !== todoId),
      ],
    }))
  }, [])

  const onAddTodo = useCallback((newTodo: ITodo) => {
    const category = calculateDateCategory(newTodo.date)

    //just to have history of todo when it's placed in completed category
    newTodo.dateCategoryOrigin = category

    // adds new todo to local DB
    add({
      ...newTodo,
    }).then(
      () => {
        toast.success('todo added in local DataBase')
      },
      (error) => {
        toast.error('Error has occurred and todo not added in local DataBase')
        console.log(error)
      },
    )

    //adds todo within its category state dynamically
    setcategorizedTodos((preTodos) => ({
      ...preTodos,
      [category]: [...preTodos[category], newTodo],
    }))
  }, [])

  //toggles todo status(isDone)
  const onTodoStatusChange = (e: any, todoId: string, todoCategory: string) => {
    let completedTodo = null
    let todoWhichShouldReturnToItsPreCategory = null
    const otherCategoriesTodos = []

    categorizedTodos[todoCategory].forEach((todo: ITodo) => {
      if (todo.id === todoId) {
        //updates todo status in local DB
        update({
          ...todo,
          isDone: e.target.checked,
        }).then(() => {
          toast.success('todo status updated')
        })

        //checks if todo came from complete category or not
        if (todoCategory !== 'completed') {
          // if todo did not come from completed category
          if (e.target.checked) {
            // and its checkbox selected then should place in compeleted category
            completedTodo = { ...todo, isDone: true }
          }
        } else {
          // if todo came from completed category then should go to its previous category(origin category)
          todoWhichShouldReturnToItsPreCategory = { ...todo, isDone: false }
        }
      } else {
        otherCategoriesTodos.push(todo)
      }
    })

    setcategorizedTodos((preTodos) => ({
      ...preTodos,
      [todoCategory]: [...otherCategoriesTodos],
      ...(todoWhichShouldReturnToItsPreCategory && {
        [todoWhichShouldReturnToItsPreCategory.dateCategoryOrigin]: [
          ...preTodos[todoWhichShouldReturnToItsPreCategory.dateCategoryOrigin],
          todoWhichShouldReturnToItsPreCategory,
        ],
      }),
      ...(completedTodo && {
        completed: [...preTodos.completed, completedTodo],
      }),
    }))
  }

  return (
    <div>
      <AddTodo onAddTodo={onAddTodo} />

      {Object.keys(categorizedTodos).map(
        (category) =>
          categorizedTodos[category].length > 0 && (
            <>
              {category === 'completed' && <Divider />}
              <Accordion defaultExpanded summery={category}>
                {categorizedTodos[category].map((todo: ITodo) => (
                  <Todo
                    onDeleteTodo={(todoId) => onDeleteTodo(todoId, category)}
                    key={todo.id}
                    onTodoStatusChange={(e, todoId) =>
                      onTodoStatusChange(e, todoId, category)
                    }
                    todo={todo}
                  />
                ))}
              </Accordion>
            </>
          ),
      )}
    </div>
  )
}

export default TodoManager
