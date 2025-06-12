import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Container from './Components/Container'
import Header from './Components/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='flex row-auto gap-2 justify-center'>
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
