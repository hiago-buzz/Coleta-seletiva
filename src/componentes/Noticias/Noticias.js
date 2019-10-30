import React from 'react'
import './Noticias.scss'
import Noticia1 from '../img/noticia1.jpg'

const Noticias = () => {
    return (
        <div className="Noticias">
            <div>
                <h3>COLETA JÁ RECOLHE 4 TONELAS DE MATERIAIS</h3>
                <p>A coleta seletiva é o recolhimento de materiais recicláveis que foram previamente separados do lixo comum pela população. Ao ser colocada em prática, ela permite que, por exemplo, vidro, papel, plástico e metais sejam utilizados na confecção de novos produtos. O reaproveitamento reduz a quantidade de resíduos que é destinada ao aterro sanitário, aumentando sua vida útil e preserva o meio ambiente.</p>
            </div>
            <div>
                <img src={Noticia1} alt="noticia"/>
            </div>
        </div>
    )
}

export default Noticias