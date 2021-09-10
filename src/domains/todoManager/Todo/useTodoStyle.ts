import { makeStyles } from 'theme'

const useTodoStyle = makeStyles(
  ({ spacing, palette: { grey, white } }) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: white[100],
      padding: spacing(2),
      textAlign: 'left',
      border: `2px solid ${grey[0]}`,
      boxShadow: `0px 5px 10px -5px ${grey[0]}`,
      margin: spacing(1, 0),
    },
  }),
  {
    name: 'Todo',
  },
)

export default useTodoStyle
