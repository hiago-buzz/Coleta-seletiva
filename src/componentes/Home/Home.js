import React from 'react'
import './Home.scss'
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <Banner />
        </div>
    )
}

export default Home