import { useState } from 'react'
import './App.css'
import './Botap'
import Botap from './Botap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Botap></Botap>
    </>
  )
}

export default App
