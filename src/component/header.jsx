import React from 'react';

const Header = (props) => {

  console.log(props);

    return (
      <div>
        <h1>Cabeçalho</h1>
        {props.children}
      </div>
    )
}

export default Header