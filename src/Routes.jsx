import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import Menu from './component/menu';
import Carros from './pages/Carros';
import Filmes from './pages/Filmes';
import Detalhes from './pages/Detalhes';

export default () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Pagina1} />
          <Route exact path="/pagina-2" component={Pagina2} />
          <Route exact path="/pagina-3" component={Pagina3} />
          <Route exact path="/carros" component={Carros} />
          <Route exact path="/filmes" component={Filmes} />
          <Route exact path="/filmes/:id" component={Detalhes} />
        </Switch>
      </BrowserRouter>
    </>
  )
}