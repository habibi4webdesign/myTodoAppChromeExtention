import { makeStyles } from 'theme'

const useAddTodoStyle = makeStyles(
  ({ palette: { grey, primary } }) => ({
    input: {
      position: 'relative',
    },
    settingIcon: {
      color: grey[10],
      cursor: 'pointer',
      '&:hover': {
        color: grey[9],
      },
    },
    inputDateWrapper: {
      position: 'absolute',
      right: '0',
      top: '20px',
      display: 'flex',
      alignItems: 'center',
      width: '150px',
      justifyContent: 'space-between',
      color: primary.main,
    },
  }),
  {
    name: 'AddTodo',
  },
)

export default useAddTodoStyle
