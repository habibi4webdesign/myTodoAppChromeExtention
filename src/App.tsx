import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { About } from './routes/About';
import { Home } from './routes/Home';
import MyThemeProvider from 'theme/MyThemeProvider';

import './App.css';

export const App = () => {
  return (
    <MyThemeProvider>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </MyThemeProvider>
  );
};
