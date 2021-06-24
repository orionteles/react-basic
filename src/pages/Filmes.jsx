import React, { useState, useEffect } from 'react';
import Filmes from '../services/Filme';
import apiFilmes from '../services/apiFilmes';
import { Row, Col, Card } from 'react-bootstrap';
import Pagina from '../component/Pagina';
import { Link } from 'react-router-dom';

const filme = new Filmes

export default () => {

  const [filmes, setFilmes] = useState([])
  const [generos, setGeneros] = useState([])

  useEffect(() => {
    apiFilmes.get('movie/upcoming?language=pt-BR').then(filme => {
      setFilmes(filme.data.results);
    })
    apiFilmes.get('genre/movie/list?language=pt-BR').then(generos => {
      console.log(generos);
      setGeneros(generos.data.genres);
    })
  }, [])
  return (
    <Pagina titulo="Filmes">
      <Row>
        {filmes.map(item => (
          <Col xs={3} key={item.id}>
            <Link to={"filmes/" + item.id}>
              <Card className="mb-3">
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
              </Card>
            </Link>

          </Col>
        ))}
      </Row>
    </Pagina>
  )
}