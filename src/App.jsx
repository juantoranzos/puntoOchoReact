import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <Titulo texto="Formulario"></Titulo>
    
    </>
  )
}

export default App
