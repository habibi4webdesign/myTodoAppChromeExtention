import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './routes/Home'
import MyThemeProvider from 'theme/MyThemeProvider'
import { DBConfig } from 'config/DBConfig'
import { initDB } from 'react-indexed-db'

import './App.css'

initDB(DBConfig)

export const App = () => {
  return (
    <MyThemeProvider>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </MyThemeProvider>
  )
}
