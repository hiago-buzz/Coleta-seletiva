import React from 'react'
import Voltar from '../img/back.png'
import Logo from '../img/logo-Renova-verde.png'
import './NavBack.scss'
import { Link } from 'react-router-dom'



const NavBack = () => {
    return (
        <div className="NavBack">
            <nav>
                <div className="voltar">
                <Link to="/" ><img src={Voltar} alt="voltar"/></Link>
                </div>
                <div className="logo">
               <img src={Logo} alt="logo"/>
                </div>
            </nav>
        </div>
    )
}

export default NavBack