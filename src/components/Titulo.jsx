import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Titulo(props) {
  return (
    
    <Container className='colordeltitulo'>
      <Row>
        <Col className="text-center">
          <h1>{props.texto}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Titulo;
