import { makeStyles } from 'theme'

const useSettingDialogStyle = makeStyles(
  ({ spacing, palette: { grey, primary } }) => ({
    root: {},
    settingEveryDay: {
      width: '100%',
      display: 'inline-flex',
      color: primary[500],
    },
    settingModalTitle: {
      color: grey[400],
      marginBottom: spacing(6),
    },
    settingModalRepeat: {
      color: grey[400],
    },
    control: {
      display: 'flex',
      alignItems: 'center',
    },
    dialogActionsWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-evenly',
      padding: spacing(3),
    },
  }),
  {
    name: 'SettingDialog',
  },
)

export default useSettingDialogStyle
