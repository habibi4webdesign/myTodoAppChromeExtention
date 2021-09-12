import { makeStyles } from 'theme'

const useInputStyle = makeStyles(
  ({ spacing, palette: { grey } }) => ({
    root: {
      width: '100%',
      marginBottom: spacing(4),
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${grey.main}`,
      },
      '& .MuiFormLabel-root': {
        color: grey[10],
      },
      '& .MuiInputBase-input': {
        color: grey[11],
        fontSize: 20,
      },
    },
  }),
  {
    name: 'Input',
  },
)

export default useInputStyle
