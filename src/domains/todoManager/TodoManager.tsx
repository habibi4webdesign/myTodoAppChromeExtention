import Accordion from 'components/Accordion'
import Divider from 'components/Divider'
import AddTodo from 'domains/todoManager/AddTodo'
import Todo from 'domains/todoManager/Todo'
import { ITodo } from 'domains/todoManager/types'
import React, { useCallback, useEffect, useState } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import { toast } from 'react-toastify'
import { calculateDateCategory } from 'utils/dateAndTime'
import useTodoManagerStyle from './useTodoManagerStyle'
interface ICategorizedTodo {
  overdue: ITodo[]
  yesterday: ITodo[]
  everyday: ITodo[]
  today: ITodo[]
  tomorrow: ITodo[]
  later: ITodo[]
  completed: ITodo[]
}

const TodoManager = () => {
  const [categorizedTodos, setcategorizedTodos] = useState<ICategorizedTodo>({
    overdue: [],
    yesterday: [],
    everyday: [],
    today: [],
    tomorrow: [],
    later: [],
    completed: [],
  })
  const classes = useTodoManagerStyle()
  const { getAll, add, update, deleteRecord, openCursor } =
    useIndexedDB('todos')

  const checkDeadLines = useCallback(() => {
    const todayDate = new Date().toLocaleDateString()

    const todayTime = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    })

    openCursor((evt: any) => {
      let cursor = evt.target.result
      let value: ITodo = cursor?.value
      if (cursor) {
        if (
          value.date === todayDate &&
          value.time === todayTime &&
          !value.notified &&
          !value.isDone
        ) {
          chrome?.runtime?.sendMessage('', {
            type: 'notification',
            options: {
              title: `${value.date} ${value.time}`,
              message: `${value.name}`,
              iconUrl: '/icon.png',
              type: 'basic',
            },
          })

          update({
            ...value,
            notified: true,
          }).then(() => {})
        }
        cursor.continue()
      }
    })
  }, [])

  useEffect(() => {
    getAll().then((todosFromDB: ITodo[]) => {
      const today = new Date().toLocaleDateString()
      const lastcategorizedTodos = {
        overdue: [],
        yesterday: [],
        everyday: [],
        today: [],
        tomorrow: [],
        later: [],
        completed: [],
      }

      //reads data from local DB(indexedDB) and categorize them by date
      for (const todo of todosFromDB) {
        const category = !todo.repeat
          ? calculateDateCategory(todo.date)
          : 'everyday'

        if (!todo.isDone) {
          lastcategorizedTodos[category] = [
            ...lastcategorizedTodos[category],
            todo,
          ]
        } else {
          //check if todo is repeat, its date is not today and is in completed category
          // then bring it to everyday category
          if (todo.repeat && todo.date !== today) {
            lastcategorizedTodos.everyday = [
              ...lastcategorizedTodos.everyday,
              { ...todo, isDone: false, date: today },
            ]
            update({
              ...todo,
              isDone: false,
              date: today,
            }).then(() => {})
          } else {
            lastcategorizedTodos.completed = [
              ...lastcategorizedTodos.completed,
              todo,
            ]
          }
        }
      }

      setcategorizedTodos({ ...lastcategorizedTodos })
      setInterval(checkDeadLines, 5000)
    })
  }, [])

  const onDeleteTodo = useCallback((todoId: string, todoCategory: string) => {
    //delete todo from local DB
    deleteRecord(todoId).then(
      () => {},
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
    const category = !newTodo.repeat
      ? calculateDateCategory(newTodo.date)
      : 'everyday'

    //just to have history of todo when it's placed in completed category
    newTodo.dateCategoryOrigin = category

    // adds new todo to local DB
    add({
      ...newTodo,
    }).then(
      () => {},
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
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'popup-modal' })
    })

    let completedTodo = null
    let todoWhichShouldReturnToItsPreCategory = null
    const otherCategoriesTodos = []

    categorizedTodos[todoCategory].forEach((todo: ITodo) => {
      if (todo.id === todoId) {
        //updates todo status in local DB
        update({
          ...todo,
          isDone: e.target.checked,
        }).then(() => {})

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
    <div className={classes.root}>
      <div className={classes.addTodoWrapper}>
        <AddTodo onAddTodo={onAddTodo} />
      </div>
      <div className={classes.todosWrapper}>
        {Object.keys(categorizedTodos).map(
          (category) =>
            categorizedTodos[category].length > 0 && (
              <>
                {category === 'completed' && <Divider />}
                <Accordion
                  classes={category === 'completed' && classes.completed}
                  defaultExpanded
                  summery={category}
                >
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
    </div>
  )
}

export default TodoManager
