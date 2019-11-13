import React from 'react'
import './Topico.scss'

const Topico= ({titulo, material, a, b, c, d, e}) => {
    return (
        <div className="Topico">
            <img src={material} alt="item reciclavel"/>
            <h3>{titulo}</h3>
           <p>{a}</p>
           <p>{b}</p>
           <p>{c}</p>
           <p>{d}</p>
           <p>{e}</p>

        </div>
    )
}

export default Topico