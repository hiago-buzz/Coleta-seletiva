import React from 'react'
import "./Info.scss"


const Info = ({assunto, conteudo}) => {
    return (
        <div className="info-user">
            <h3>{assunto}</h3>
            <p>{conteudo}</p>
        </div>
    )
}


export default Info