import React from 'react';
import './Home.scss';
import Banner from '../Banner/Banner';
import Dicas from '../Dicas/Dicas';
import Acesso from '../Acesso/Acesso';
import Noticias from '../Noticias/Noticias';
import Coleta from '../Coleta/Coleta';
import Contato from '../Contato/Contato';
import Nav from '../Nav/Nav';

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <Banner />
            <Dicas />
            <Coleta />
            <Noticias />
            <Acesso />
            <Contato />
        </div>
    )
}

export default Home