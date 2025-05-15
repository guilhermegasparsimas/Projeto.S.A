import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Cabecalho from './components/cabecalho/Cabecalho'

function App() {


  return (
    <div className='container-app'>
      <Cabecalho />
      <Body />
    </div>
  )
}

export default App
