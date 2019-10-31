import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
import Botao from '../Botao/Botao';

const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <div>
                    <h2>COLETA SELETIVA</h2>
                </div>
                <div>
                    <Link to="#descricao">Descrição</Link>
                    <Link to="#">Dicas</Link>
                    <Link to="#">Pontos de Descarte</Link>
                    <Link to="#">Contatos</Link>
                </div>
                <div>
                    <Botao>Entrar</Botao>
                    <Botao classe="btn-cadastro">Cadastrar</Botao>
                </div>
            </nav>
        </div>
    )
}


export default Nav