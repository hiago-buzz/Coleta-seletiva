import React from 'react'
import './Postos.scss'

const Postos = ({img, alt, endereco, hora}) => {
    return (
        <div className="Postos">
            <img src={img} alt={alt}/>
            <div>
                <p>{endereco}</p>
                <p>{hora}</p>   
            </div>
        </div>
    )
}

export default Postos