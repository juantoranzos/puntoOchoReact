import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';

function Formulario() {

    const [nombre, setNombre] = useState('');
    const[apellido, setApellido] = useState('');
    const [dni, setDNi] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        if (nombre && apellido && dni && email) {
        
          alert('Datos enviados');
        } else {
          alert('Completar todos los datos');
        }
    }


  return (
    <Form onSubmit={handleFormSubmit} className='form-control'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='p-2'>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Escriba su nombre" required maxLength={50} id='nombre'  onChange={(e) => setNombre(e.target.value)} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='p-2'>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Escriba su apellido" required  maxLength={25} id='apellido' onChange={(e) => setApellido(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='p-2'>DNI</Form.Label>
        <Form.Control type="number" placeholder="Ingrese su numero de documento" required  id='dni'  onChange={(e) => setDNi(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='p-2'>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese un correo electronico" required id='email'  onChange={(e) => setEmail(e.target.value)} />
        
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;