import React from 'react'
import "./Aberto.scss"
import linkdn from "../../img/linkedin.png"
import whatsapp from "../../img/whatsapp.png"
import github from "../../img/github.png"

const Aberto = ({style, nomeCompleto, descricaoPerfil, emailPerfil, linkLinkedin, linkWhatsapp, linkGithub}) =>{

    return (
        <div style={style} className="aberto">
            <div>
                <div>
                    <h2>{nomeCompleto}</h2>
                    <p>{descricaoPerfil}</p>
                </div>
            <div className="linksRede">
                <a href={linkLinkedin} target="_blank"><img src={linkdn} alt="Linkdn"/></a>
                <a  href={linkWhatsapp} target="_blank"><img src={whatsapp} alt="whatsapp"/></a>
                <a  href={linkGithub} target="_blank"><img src={github} alt="github"/></a>     
            </div>
                <p>{emailPerfil}</p>
            </div>
         </div>
    )
 
}

export default Aberto