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
      justifyContent: 'space-between',
      color: primary.main,
      '&>span': {
        marginRight: 10,
      },
    },
  }),
  {
    name: 'AddTodo',
  },
)

export default useAddTodoStyle
