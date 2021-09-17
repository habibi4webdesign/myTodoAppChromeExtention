//Materail Ui Components
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core'
//Material Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//Libraries
import React, { FC, ReactNode } from 'react'
import cs from 'classnames'
//Styles
import useAccordionStyle from './useAccordionStyle'

interface IAccordionProps {
  isExpand?: boolean
  onChange?: () => (event: React.ChangeEvent<{}>, expanded: boolean) => void
  summery?: string
  children?: ReactNode
  ariaControls?: string
  id?: string
  square?: boolean
  defaultExpanded?: boolean
  classes?: string
}

const Accordion: FC<IAccordionProps> = (props) => {
  const {
    isExpand,
    onChange,
    summery,
    children,
    ariaControls,
    id,
    square,
    defaultExpanded,
    classes: externalClasses,
  } = props
  const classes = useAccordionStyle()

  return (
    <MuiAccordion
      className={cs(classes.root, externalClasses)}
      square={square}
      expanded={isExpand}
      onChange={onChange}
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={ariaControls}
        id={id}
      >
        {summery}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  )
}

export default Accordion
