import React, {useState} from 'react'
import './Nav.scss'
import {Link, animateScroll as scroll} from "react-scroll"
import Botao from '../Botao/Botao';

const Nav = () => {

    const [menuAtivo, setMenuAtivo] = useState(false);

    const AbrirMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const FecharMenu = () =>{
        setMenuAtivo(false)
    }
   

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
                <div onClick={AbrirMenu} id="menu-hamburguer">
                    <span className={`${menuAtivo ? "virarX1" : ""}`}></span>
                    <span className={`${menuAtivo ? "sumirIgualTiro" : ""}`}></span>
                    <span className={`${menuAtivo ? "virarX2" : ""}`}></span>
                </div>
            
            <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
              
                <Link onClick={FecharMenu} to="Nav" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                <Link onClick={FecharMenu} to="Dicas" spy={true} smooth={true} offset={-70} duration={500}>Dicas</Link>
                <Link onClick={FecharMenu} to="Noticias" spy={true} smooth={true} offset={-70} duration={500}>Noticias</Link>
                <Link onClick={FecharMenu} to="Coleta" spy={true} smooth={true} offset={-70} duration={500}>Pontos de Descarte</Link>
            </section>
            </nav>
        </div>
    )
}


export default Nav