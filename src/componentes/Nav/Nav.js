import React, {useState} from 'react'
import './Nav.scss'
import {Link} from "react-scroll"
import Botao from '../Botao/Botao';
import Logo from '../img/logo-inteira-verde-modificado.png'
import {Link as LInkRouter} from "react-router-dom"


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
                <Link to="Nav" spy={true} smooth={true} offset={-70} duration={500}><img src={Logo} alt="logo"/></Link>
                </div>
                <div className="Ancoras">
                   
                    <Link to="Dicas" spy={true} smooth={true} offset={-70} duration={500}>Dicas</Link>
                    <Link to="Coleta" spy={true} smooth={true} offset={-70} duration={500}>Pontos de Entrega</Link>
                    <Link to="Noticias" spy={true} smooth={true} offset={-70} duration={500}>Noticias</Link>
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
              
                <Link onClick={FecharMenu} to="Dicas" spy={true} smooth={true} offset={-70} duration={500}>Dicas</Link>
                <Link onClick={FecharMenu} to="Coleta" spy={true} smooth={true} offset={-70} duration={500}>Pontos de Entrega</Link>
                <Link onClick={FecharMenu} to="Noticias" spy={true} smooth={true} offset={-70} duration={500}>Noticias</Link>
                <Link onClick={FecharMenu} to="Acesso" spy={true} smooth={true} offset={-70} duration={500}>Cadastrar</Link>
                <Link onClick={FecharMenu} to="Acesso" spy={true} smooth={true} offset={-70} duration={500}>Entrar</Link>
                <Link onClick={FecharMenu} to="Contato" spy={true} smooth={true} offset={-70} duration={500}>Contatos</Link>
                <LInkRouter className="LInkRouter" to="/chamada" onClick={FecharMenu}>Solicitação de Coleta em Lote</LInkRouter>
            </section>
            </nav>
        </div>
    )
}


export default Nav