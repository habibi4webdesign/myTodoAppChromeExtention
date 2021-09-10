import { ThemeProvider } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';
import theme from './theme';

interface IMyThemeProviderProps {
  children: ReactNode;
}

const MyThemeProvider: FC<IMyThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
