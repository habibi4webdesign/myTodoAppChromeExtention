import { makeStyles } from 'theme'

const useInputStyle = makeStyles(
  ({ spacing, palette: { grey, primary } }) => ({
    root: {
      width: '100%',
      marginBottom: spacing(4),
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: `1px solid ${grey[12]}`,
      },
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${grey.main}`,
      },
      '& .MuiFormLabel-root': {
        color: grey[10],
      },
      '& .MuiInputBase-input': {
        color: primary.main,
        fontSize: 20,
      },
    },
  }),
  {
    name: 'Input',
  },
)

export default useInputStyle
