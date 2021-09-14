import { ITodo } from 'domains/todoManager/types'
import { makeStyles } from 'theme'

interface IUseTodoStyle {
  todo: ITodo
}

const useTodoStyle = makeStyles<IUseTodoStyle>(
  ({ spacing, palette: { grey } }) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: spacing(2, 5),
      textAlign: 'left',
      margin: spacing(3, 0),
      borderRadius: '15px',
      background: `linear-gradient(145deg, ${grey[4]}, ${grey[6]})`,
      boxShadow: `2px 2px 6px ${grey[3]},-2px -2px 6px ${grey[7]}`,
      color: grey[10],
      '&:hover .moreVertIcon': {
        visibility: 'visible',
        '&:hover': {
          color: grey[12],
          cursor: 'pointer',
        },
      },
    },
    name: {
      textDecoration: ({ todo: { isDone } }) => isDone && 'line-through',
    },
    todoActionsWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& .moreVertIcon': {
        visibility: 'hidden',
      },
    },
    todoMenu: {
      padding: spacing(1, 2),
      display: 'flex',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: grey[11],
      },
    },
  }),
  {
    name: 'Todo',
  },
)

export default useTodoStyle
