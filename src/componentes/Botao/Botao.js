import React from 'react'
import './Botao.scss'

const Botao = ({ children, classe }) => {
    return (
        <div className="Botao">
            <button className={classe}>
            {children}
            </button>
        </div>
    )
}


export default Botao