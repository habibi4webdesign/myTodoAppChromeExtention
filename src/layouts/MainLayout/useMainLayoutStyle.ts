import { makeStyles } from 'theme'

const useAddTodoStyle = makeStyles(
  ({ palette: { grey } }) => ({
    root: {
      display: 'flex',
    },
    sidebar: {
      backgroundColor: grey[3],
      height: '100vh',
    },
    content: {
      flex: 1,
      margin: '1% 10%',
    },
  }),
  {
    name: 'AddTodo',
  },
)

export default useAddTodoStyle
