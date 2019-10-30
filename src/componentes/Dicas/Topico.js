import React from 'react'
import './Topico.scss'

const Topico= ({titulo, texto}) => {
    return (
        <div className="Topico">
            <section>
            <h2>{titulo}</h2>
            <p>{texto}</p>
            </section>

        </div>
    )
}

export default Topico