import { useState } from 'react'
import './App.css'
import Title from './Title'
import Card from './Card'
import Container from './Container'

function App() {
  //const [count, setCount] = useState(0)
  let cor1 = "bg-red-100";

  return (
    <>
      <Title></Title>
      <Container>
        <Card></Card>
        <Card></Card>
      </Container>
      <Card></Card>
    </>
  )
}

export default App
