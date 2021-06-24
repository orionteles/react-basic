import React from 'react';

export default () => {

  const carros = ['Fusca', 'Gol', 'Kombi', 'Pálio', 'Virtus', 'Cronus']

  return (
    <>
      <h1>Carros</h1>
      <ul>
        {carros.map(carro => (
          <li>{carro}</li>
        ))}
      </ul>
    </>
  )
}