import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './componentes/Home/Home';

import Usuario from './componentes/Usuario/Usuario';

// import './App.scss';

const App = () => {
  return (

    <BrowserRouter>
  
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Usuario} />
    </BrowserRouter>

  );
}

export default App;
