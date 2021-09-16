import { makeStyles } from 'theme'

const useAccordionStyle = makeStyles(
  ({ spacing, palette: { grey, primary } }) => ({
    root: {
      color: grey[10],
      borderRadius: '15px',
      background: `#333`,
      boxShadow: `unset`,
      margin: spacing(4, 0),
      "&::before":{
        backgroundColor:grey[8]
      },
      '& .MuiCollapse-entered': {
        background: grey[5],
        boxShadow: `inset 2px 2px 5px ${grey[1]}, inset -2px -2px 5px ${grey[5]}`,
        borderRadius: 5,
        margin: spacing(3),
        position: 'relative',
        bottom: spacing(3),
      },
      '& .MuiAccordionSummary-root': {
        padding: spacing(0, 3),
      },
      '& .MuiAccordionDetails-root': {
        padding: spacing(1, 3),
        display: 'block',
      },
      '& .MuiIconButton-root': {
        color: primary.main,
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        minHeight: 50,
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: spacing(4, 0),
      },
    },
  }),
  {
    name: 'Accordion',
  },
)

export default useAccordionStyle
