import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './componentes/Home/Home';
import Chamada from './componentes/Chamada/Chamada';
import Usuario from './componentes/Usuario/Usuario';
import Equipe from './componentes/Equipe/Equipe';
import Lista from './componentes/Lista/Lista';

// import './App.scss';

const App = () => {
  return (

    <BrowserRouter>
  
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Usuario} />
    <Route exact path="/chamada" component={Chamada} />
    <Route exact path="/equipe" component={Equipe}/>
    <Route exact path="/lista" component={Lista}/>
 
    </BrowserRouter>

  );
}

export default App;
