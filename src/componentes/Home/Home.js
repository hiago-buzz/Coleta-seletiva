import React from 'react'
import './Home.scss'
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Dicas from '../Dicas/Dicas';
import Acesso from '../Acesso/Acesso';
import Noticias from '../Noticias/Noticias';

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <Banner />
            <Dicas />
            <Acesso />
            <Noticias />
        </div>
    )
}

export default Home