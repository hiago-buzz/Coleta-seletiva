import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <div>
                    <h2>COLETA SELETIVA</h2>
                </div>
                <div>
                    <Link to="#">Descrição</Link>
                    <Link to="#">Dicas</Link>
                    <Link to="#">Pontos de Descarte</Link>
                    <Link to="#">Contatos</Link>
                </div>
                <div>
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </div>
            </nav>
        </div>
    )
}


export default Nav