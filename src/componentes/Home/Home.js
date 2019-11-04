import React from 'react';
import './Home.scss';
import Banner from '../Banner/Banner';
import Dicas from '../Dicas/Dicas';
import Acesso from '../Acesso/Acesso';
import Noticias from '../Noticias/Noticias';
import Coleta from '../Coleta/Coleta';
import Contato from '../Contato/Contato';

const Home = () => {
    return (
        <div className="Home">

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