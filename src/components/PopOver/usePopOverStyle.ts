import { makeStyles } from 'theme'

const usePopOverStyle = makeStyles(
  ({ spacing }) => ({
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
