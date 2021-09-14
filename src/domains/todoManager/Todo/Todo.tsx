import React, { FC } from 'react'
//Types
import { ITodo } from 'domains/todoManager/types'
//Styles
import useTodoStyle from './useTodoStyle'
//UI components
import CheckBox from 'components/CheckBox'
import PopOver from 'components/PopOver'
//Icons
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteIcon from '@material-ui/icons/Delete'
import { Typography } from '@material-ui/core'

interface ITodoProps {
  todo: ITodo
  onTodoStatusChange: (e: any, id: string) => void
  onDeleteTodo: (todoId: string) => void
}

const Todo: FC<ITodoProps> = (props) => {
  const { todo, onTodoStatusChange, onDeleteTodo } = props

  const [todoMenuAnchorEl, settodoMenuAnchorEl] =
    React.useState<HTMLButtonElement | null>(null)

  const classes = useTodoStyle({ todo })

  const onOpenTodoMenu = (event: any) => {
    settodoMenuAnchorEl(event.currentTarget)
  }

  const open = Boolean(todoMenuAnchorEl)

  const onCloseTodoMenu = () => {
    settodoMenuAnchorEl(null)
  }

  return (
    <>
      <div className={classes.root}>
        <span className={classes.name}>{todo.name}</span>
        <span className={classes.todoActionsWrapper}>
          <CheckBox
            color="primary"
            onChange={(e) => onTodoStatusChange(e, todo.id)}
            checked={todo.isDone}
          />
          <MoreVertIcon className="moreVertIcon" onClick={onOpenTodoMenu} />
        </span>
      </div>
      <PopOver
        anchorEl={todoMenuAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={onCloseTodoMenu}
      >
        <span
          className={classes.todoMenu}
          onClick={() => onDeleteTodo(todo.id)}
        >
          <DeleteIcon />
          <Typography variant="body1">Delete</Typography>
        </span>
      </PopOver>
    </>
  )
}

export default Todo
