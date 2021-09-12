import { makeStyles } from 'theme'

const useDatePickerStyle = makeStyles(
  ({ palette: { grey, primary } }) => ({
    root: {
      '& .MuiFormLabel-root': {
        color: grey[10],
      },
      '& .MuiIconButton-root svg': {
        color: grey[10],
        '&:hover': {
          color: grey[9],
        },
      },
      '& .MuiInputBase-input': {
        color: primary.main,
        fontSize: 20,
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: `1px solid ${grey[12]}`,
      },
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${grey.main}`,
      },
    },
  }),
  {
    name: 'DatePicker',
  },
)

export default useDatePickerStyle
