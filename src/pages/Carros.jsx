import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Pagina from '../component/Pagina';
import Carro from '../services/Carro';

const carro = new Carro

export default () => {
  
  const carros = carro.getAll();

  return (
    <Pagina titulo="Carros">
      <Row>
        {carros.map(item => (
          <Col xs="3" className="mb-3">
            <Card>
              <Card.Img variant="top" src={item.foto} />\
              <Card.Body>
                <Card.Title>{item.marca + ' - ' + item.modelo}</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      {item.ano}
                    </Col>
                    <Col className="text-right">
                      <Button variant="danger">Detalhes</Button>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}