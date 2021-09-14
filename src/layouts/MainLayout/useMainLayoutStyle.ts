import { makeStyles } from 'theme'

const useMainLayoutStyle = makeStyles(
  ({ palette: { grey } }) => ({
    root: {
      display: 'flex',
    },
    sidebar: {
      backgroundColor: grey[3],
      minHeight: '100vh',
    },
    content: {
      flex: 1,
      margin: '1% 10%',
    },
  }),
  {
    name: 'MainLayout',
  },
)

export default useMainLayoutStyle
