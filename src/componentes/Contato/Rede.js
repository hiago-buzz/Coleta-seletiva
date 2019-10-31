import React from 'react'
import './Rede.scss'

const Rede = ({imgRede, descRede}) => {
    return (
        <div className="Rede">
            <img src={imgRede} alt={descRede}/>
        </div>
    )   
}

export default Rede