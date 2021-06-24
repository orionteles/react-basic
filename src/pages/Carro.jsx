import React from 'react';
import { Grid, Row, Col, Button } from 'rsuite';
import Card from '../component/basicos/Card/Card';
import { Link } from 'react-router-dom';

export default ({ carro }) => {

  return (
    <>
      <Card
        title={carro.marca + ' - ' + carro.modelo}
        image={carro.foto}
      >
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} >
              <p style={{marginTop: '8px'}}>Ano: <strong>{carro.ano}</strong></p>
            </Col>
            <Col xs={12}>
              <Link to="/pagina-2"><Button color="red">Detalhes</Button></Link>
            </Col>
          </Row>
        </Grid>
      </Card>
    </>
  )
}