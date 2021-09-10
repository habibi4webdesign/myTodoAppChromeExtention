import TodoManager from 'domains/todoManager/TodoManager'
import MainLayout from 'layouts/MainLayout'
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
