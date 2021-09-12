import { makeStyles } from 'theme'

const useCheckBoxStyle = makeStyles(
  ({ palette: { primary } }) => ({
    root: {
      color: primary.main,
    },
  }),
  {
    name: 'CheckBox',
  },
)

export default useCheckBoxStyle
