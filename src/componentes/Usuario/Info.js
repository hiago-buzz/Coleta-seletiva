import React from 'react'
import "./Info.scss"


const Info = ({assunto, conteudo, endereco, numero, bairro}) => {
    return (
        <div className="info-user">
            <h3>{!assunto ? "" : assunto}</h3>
            <p>{!conteudo ? "" : conteudo}</p>
            <p>{!bairro ? "" : bairro}</p>
            <p>{!endereco ? "" : endereco}</p>
            <p>{!numero ? "" : numero}</p>
        </div>
    )
}


export default Info