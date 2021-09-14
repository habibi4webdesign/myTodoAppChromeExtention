import { makeStyles } from 'theme'

const usePopOverStyle = makeStyles(
  ({ spacing, palette: { grey } }) => ({
    root: {
      '& .MuiPaper-root': {
        padding: spacing(2, 0),
      },
    },
  }),
  {
    name: 'PopOver',
  },
)

export default usePopOverStyle
