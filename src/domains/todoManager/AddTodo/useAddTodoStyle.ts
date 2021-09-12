import { makeStyles } from 'theme'

const useAddTodoStyle = makeStyles(
  ({ palette: { primary } }) => ({
    root: {
      position: 'relative',
    },
    datePicker: {
      position: 'absolute',
      right: 0,
      fontSize: 16,
      width: 300,
      '& .MuiInput-underline:after': {
        borderBottom: 'none',
        content: 'none',
      },
      '& .MuiInput-underline:before': {
        borderBottom: 'none',
        content: 'none',
      },
      '& .MuiInputBase-input': {
        cursor: 'pointer',
        color: primary[400],
      },
    },
  }),
  {
    name: 'AddTodo',
  },
)

export default useAddTodoStyle
