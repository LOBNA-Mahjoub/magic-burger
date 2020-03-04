import React from 'react'
import Toolbar from './components/Toolbar/Toolbar'
import Burgerbuilder from './components/Burgerbuilder/Burgerbuilder'
import './App.css'

function app() {
  return (
    <div>
      <Toolbar />
      <Burgerbuilder />
    </div>
  )
}

export default app