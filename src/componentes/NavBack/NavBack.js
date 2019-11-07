import React from 'react'
import Voltar from '../img/back.png'
import Logo from '../img/logo-Renova-verde.png'
import './NavBack.scss'
import {Link} from "react-router-dom"



const NavBack = () => {
    return (
        <div className="NavBack">
            <nav>
                <div className="voltar">
                    <img src={Voltar} alt="voltar"/>
                </div>
                <div className="logo">
                <Link to="/"><img src={Logo} alt="logo"/></Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBack