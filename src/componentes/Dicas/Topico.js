import React from 'react'
import './Topico.scss'

const Topico= ({titulo, a, b, c, d, e}) => {
    return (
        <div className="Topico">
            <section>
                <h3>{titulo}</h3>
            <ul>
                <li>{a}</li>
                <li>{b}</li>
                <li>{c}</li>
                <li>{d}</li>
                <li>{e}</li>
                
            </ul>
            </section>

        </div>
    )
}

export default Topico