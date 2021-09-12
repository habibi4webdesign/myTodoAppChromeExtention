import { makeStyles } from 'theme'

const useDialogStyle = makeStyles(
  ({ spacing, palette: { grey } }) => ({
    root: {
      '& .MuiPaper-root': {
        backgroundColor: grey[5],
      },
    },
  }),
  {
    name: 'Dialog',
  },
)

export default useDialogStyle
