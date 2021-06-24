import React from 'react';

export default ({min, max}) => {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <h1>Aleatório: {random}</h1>
  )
}
