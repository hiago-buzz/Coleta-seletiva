import React from 'react'
import './Rede.scss'

const Rede = ({imgRede, descRede, linkRedirect}) => {
    return (
        <div className="Rede">
            <a href={linkRedirect} target="_blank" rel="noopener noreferrer">
            <img src={imgRede} alt={descRede}/>
            </a>
        </div>
    )   
}

export default Rede