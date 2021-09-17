//Business Components
import TodoManager from 'domains/todoManager/TodoManager'
//Layout
import MainLayout from 'layouts/MainLayout'
//Libraries
import React from 'react'

export const Home = () => {
  return (
    <div className="App">
      <MainLayout>
        <TodoManager />
      </MainLayout>
    </div>
  )
}
