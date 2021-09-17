//Libraries
import React from 'react'
import { initDB } from 'react-indexed-db'
import { Route, Switch } from 'react-router-dom'
//Routes
import { Home } from './routes/Home'
//Material Theme
import MyThemeProvider from 'theme/MyThemeProvider'
//indexedDb config
import { DBConfig } from 'config/DBConfig'
//Styles
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
