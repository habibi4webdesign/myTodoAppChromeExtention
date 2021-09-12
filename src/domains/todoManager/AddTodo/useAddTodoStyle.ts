import { makeStyles } from 'theme'

const useAddTodoStyle = makeStyles(
  ({ palette: { grey } }) => ({
    input: {
      position: 'relative',
    },
    settingIcon: {
      position: 'absolute',
      right: 0,
      top: 20,
      color: grey[10],
      cursor: 'pointer',
      '&:hover': {
        color: grey[9],
      },
    },
  }),
  {
    name: 'AddTodo',
  },
)

export default useAddTodoStyle
