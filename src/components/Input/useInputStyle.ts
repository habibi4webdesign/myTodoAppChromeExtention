import { makeStyles } from 'theme'

const useInputStyle = makeStyles(
  ({ palette: { grey } }) => ({
    root: {
      width: 300,
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${grey.main}`,
      },
      '& .MuiFormLabel-root': {
        color: grey[3],
      },
      '& .MuiInputBase-input': {
        color: grey[4],
        fontSize: 20,
      },
    },
  }),
  {
    name: 'Input',
  },
)

export default useInputStyle
