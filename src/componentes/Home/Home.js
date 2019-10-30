import React from 'react'
import './Home.scss'
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Dicas from '../Dicas/Dicas';

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <Banner />
            <Dicas />
        </div>
    )
}

export default Home