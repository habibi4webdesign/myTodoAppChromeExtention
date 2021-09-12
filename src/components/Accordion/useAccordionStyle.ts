import { makeStyles } from 'theme'

const useAccordionStyle = makeStyles(
  ({ spacing, palette: { grey, primary } }) => ({
    root: {
      color: grey[10],
      borderRadius: '15px',
      background: `linear-gradient(145deg, ${grey[6]}, ${grey[4]})`,
      boxShadow: `5px 5px 10px ${grey[3]}, -5px -5px 10px ${grey[7]}`,
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
        padding: spacing(3),
        display: 'block',
      },
      '& .MuiIconButton-root': {
        color: primary.main,
      },
    },
  }),
  {
    name: 'Accordion',
  },
)

export default useAccordionStyle
