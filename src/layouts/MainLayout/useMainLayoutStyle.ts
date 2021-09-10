import { makeStyles } from 'theme'

const useAddTodoStyle = makeStyles(
  () => ({
    root: {
      display: 'flex',
    },
    sidebar: {},
    content: {},
  }),
  {
    name: 'AddTodo',
  },
)

export default useAddTodoStyle
