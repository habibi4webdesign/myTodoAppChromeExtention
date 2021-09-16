import { makeStyles } from 'theme'

const useTodoManagerStyle = makeStyles(
  ({ palette: { grey, primary } }) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    completed: {
      '&:before': {
        height: 0,
      },
    },
    addTodoWrapper: {
      width: '120%',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      backgroundColor: grey[5],
    },
    todosWrapper: {
      marginTop: 20,
      width: '100%',
    },
  }),
  {
    name: 'TodoManager',
  },
)

export default useTodoManagerStyle
