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
      margin: spacing(4, 0),
      borderRadius: '15px',
      background: `linear-gradient(145deg, ${grey[4]}, ${grey[6]})`,
      boxShadow: `2px 2px 6px ${grey[3]},-2px -2px 6px ${grey[7]}`,
      color: grey[10],
    },
    name: {
      textDecoration: ({ todo: { isDone } }) => isDone && 'line-through',
    },
  }),
  {
    name: 'Todo',
  },
)

export default useTodoStyle
