import { useState } from 'react'
import './App.css'
import Card from '../Components/Card'
import Container from '../Components/Container'

function App() {
  //const [count, setCount] = useState(0)
  let cor1 = "bg-red-100";

  return (
    <>
    <div className='flex row-auto gap-2'>
    <Container>
        <Card tarefa='Dormir' conteudo='Arrumar a cama'></Card>
        <Card tarefa='Dormir' conteudo='Arrumar a cama'></Card>
        <Card tarefa='Dormir' conteudo='Arrumar a cama'></Card>
      </Container>
      <Container>
        <Card tarefa='Dormir' conteudo='Arrumar a cama'></Card>
        <Card tarefa='Dormir' conteudo='Arrumar a cama'></Card>
        <Card tarefa='Dormir' conteudo='Arrumar a cama'></Card>
      </Container>
    </div>
    </>
  )
}

export default App
