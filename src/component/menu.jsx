import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Cabecalho.css'

export default (props) => {

  return (
    <>
      <Navbar bg="light" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/pagina1">Página 1</Link>
            <Link to="/pagina2">Página 2</Link>
            <Link to="/carros">Carros</Link>
            <Link to="/filmes">Filmes</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}