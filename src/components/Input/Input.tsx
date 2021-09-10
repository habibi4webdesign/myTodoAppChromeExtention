import React, { FC, ReactNode } from 'react';
//styles
import TextField from '@material-ui/core/TextField';
import useInputStyle from './useInputStyle';

interface IInputProps {}

const Input: FC<IInputProps> = (props) => {
  const {} = props;
  const classes = useInputStyle();

  return (
    <TextField
      className={classes.root}
      id="todo"
      label="What would you like to do?"
    />
  );
};

export default Input;
