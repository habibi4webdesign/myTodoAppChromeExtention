import { ITodo } from 'domains/todoManager/types'
import { makeStyles } from 'theme'

interface IUseTodoStyle {
  todo: ITodo
}

const useTodoStyle = makeStyles<IUseTodoStyle>(
  ({ spacing, palette: { grey, white } }) => ({
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
      // border: `1px solid ${grey[0]}`,
      // background: white[100],
      // boxShadow: `-6px 6px 5px -2px ${grey[0]}`,
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
