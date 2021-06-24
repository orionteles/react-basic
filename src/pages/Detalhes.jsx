import React, { useState, useEffect } from 'react';
import { Col, Row, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../component/Pagina';
import apiFilmes from '../services/apiFilmes';

export default (props) => {

  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])

  useEffect(() => {
    const id = props.match.params.id
    apiFilmes.get('movie/' + id + '?language=pt-BR').then(results => {
      setFilme(results.data)
    })
    apiFilmes.get('movie/' + id + '/credits?language=pt-BR').then(results => {
      setAtores(results.data.cast);
    })
  }, [])

  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col xs={3}>
          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
        </Col>
        <Col>
          <h1>{filme.title}</h1>
          <p>{filme.overview}</p>
          <p>Lançamento: {filme.release_date}</p>
        </Col>
      </Row>
      <h1>Atores</h1>
      <Row>
        {atores.map(item => (
          <Col xs={2} key={item.id}>
            <Link to={"filmes/" + item.id}>
              <OverlayTrigger
                key={item.id}
                placement='auto'
                overlay={
                  <Tooltip id={`tooltip-${item.id}`}>
                    <p>Personagem: {item.character}</p>
                    <p>Ator: {item.name}</p>
                  </Tooltip>
                }
              >
                <Card className="mb-3">
                  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item?.profile_path} />
                </Card>
              </OverlayTrigger>

            </Link>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}