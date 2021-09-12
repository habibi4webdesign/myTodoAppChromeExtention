import { makeStyles } from 'theme'

const useDividerStyle = makeStyles(
  ({ spacing, palette: { grey } }) => ({
    root: {
      borderRadius: '50px',
      background: grey[7],
      boxShadow: `inset 2px 2px 3px ${grey[2]}, inset -2px -2px 3px ${grey[6]}`,
      height: 5,
      margin: spacing(8, 0),
    },
  }),
  {
    name: 'Divider',
  },
)

export default useDividerStyle
