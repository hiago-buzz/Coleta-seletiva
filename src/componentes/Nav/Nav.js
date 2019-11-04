import React from 'react'
import './Nav.scss'
import {Link, animateScroll as scroll} from "react-scroll"
import Botao from '../Botao/Botao';

const Nav = () => {

    const scrollToTop = () =>{
        scroll.scrollToTop();
    };

    return (
        <div className="Nav">
            <nav>
                <div>
                    <h2>COLETA SELETIVA</h2>
                </div>
                <div className="Ancoras">
                    <Link to="Nav" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                    <Link to="Dicas" spy={true} smooth={true} offset={-70} duration={500}>Dicas</Link>
                    <Link to="Noticias" spy={true} smooth={true} offset={-70} duration={500}>Noticias</Link>
                    <Link to="Coleta" spy={true} smooth={true} offset={-70} duration={500}>Pontos de Descarte</Link>
                    
                    <Link to="Contato" spy={true} smooth={true} offset={-70} duration={500}>Contatos</Link>
                    <Link to="Acesso" spy={true} smooth={true} offset={-70} duration={500}> <Botao classe="btn-cadastro">Cadastrar</Botao></Link>
                    <Link to="Acesso" spy={true} smooth={true} offset={-70} duration={500}><Botao>Entrar</Botao></Link>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    )
}


export default Nav