import React from 'react'
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
                    <a href="#">Descrição</a>
                    <a href="#">Dicas</a>
                    <a href="#">Pontos de Descarte</a>
                    <a href="#">Contatos</a>
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