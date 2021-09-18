//UI Components
import Accordion from 'components/Accordion'
import Divider from 'components/Divider'
import AddTodo from 'domains/todoManager/AddTodo'
import Todo from 'domains/todoManager/Todo'
//Types
import { ITodo } from 'domains/todoManager/types'
//Libraries
import React, { useCallback, useEffect, useState } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import { toast } from 'react-toastify'
//Utils
import { calculateDateCategory } from 'utils/dateAndTime'
//Styles
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

    openCursor((e: any) => {
      let cursor = e.target.result
      let value: ITodo = cursor?.value
      if (cursor) {
        if (
          value.date === todayDate &&
          value.time === todayTime &&
          !value.notified &&
          !value.isDone
        ) {
          chrome?.runtime?.sendMessage('', {
            type: 'todoNotif',
            todo: {
              ...value,
            },
          })

          //update the local DB (indexedDB)
          update({
            ...value,
            notified: true, //!prevents from show notification multiple times for one task
          }).then(
            () => {},
            (err) => {
              console.log(err)
            },
          )
        }
        cursor.continue()
      }
    })
  }, [])

  const readTodosFromIndexedDb = (): Promise<ICategorizedTodo> => {
    return new Promise((resolve, reject) => {
      getAll()
        .then((todosFromDB: ITodo[]) => {
          const today = new Date().toLocaleDateString()
          const lastcategorizedTodos: ICategorizedTodo = {
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
                { ...todo, dateCategoryOrigin: category },
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

          //Checks if it is time to do the task
          setInterval(checkDeadLines, 5000)

          resolve(lastcategorizedTodos)
        })
        .catch((err) => reject(err))
    })
  }

  useEffect(() => {
    //listen to doneTodoToComp message from background.js
    chrome?.runtime?.onMessage.addListener(
      ({ todo, type }: { todo: ITodo; type: string }) => {
        readTodosFromIndexedDb()
          .then((res) => {
            if (res) {
              if (type === 'doneTodoToComp') {
                onTodoStatusChange(true, todo.id, todo.dateCategoryOrigin, res)
              }
            }
          })
          .catch((err) => {
            console.log(err)
          })
      },
    )
    //get initial data from IndexedDb
    readTodosFromIndexedDb()
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

  //toggles todo status(isDone flag)
  const onTodoStatusChange = (
    isChecked?: boolean,
    todoId?: string,
    todoCategory?: string,
    todos: ICategorizedTodo = categorizedTodos,
  ) => {
    let completedTodo = null
    let todoWhichShouldReturnToItsPreCategory = null
    const otherCategoriesTodos = []

    todos[todoCategory].forEach((todo: ITodo) => {
      if (todo.id === todoId) {
        //updates todo status in local DB
        update({
          ...todo,
          isDone: isChecked,
        }).then(() => {})

        //checks if todo came from complete category or not
        if (todoCategory !== 'completed') {
          // if todo did not come from completed category
          if (isChecked) {
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
          (category, index) =>
            categorizedTodos[category].length > 0 && (
              <div key={index}>
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
                        onTodoStatusChange(e?.target?.checked, todoId, category)
                      }
                      todo={todo}
                    />
                  ))}
                </Accordion>
              </div>
            ),
        )}
      </div>
    </div>
  )
}

export default TodoManager
