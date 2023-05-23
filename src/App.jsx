import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <Titulo texto="Formulario"></Titulo>
    <hr />
    <Formulario></Formulario>

  

    </>
  )
}

export default App
