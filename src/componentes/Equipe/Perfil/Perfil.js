import React from 'react'
import "./Perfil.scss"

const Perfil = ({imagemPerfil, nomePerfil, nomeCompleto, pop, descricaoPerfil, emailPerfil, linkdn, whatsapp, github}) => {
      
    return(
        
       <div className="Perfil">

         <img className="foto" src={imagemPerfil} alt="foto do usuario"/>
            
            <div className="barra">
                <strong>{nomePerfil}</strong> <strong>{pop}</strong>
            </div>
            <div className="aberto">
                <div>
                    <h2>{nomeCompleto}</h2>
                    <p>{descricaoPerfil}</p>
                </div>
                <div className="linksRede">
                    <a href={linkdn} target="_blank"><img src={imagemPerfil} alt="Linkdn"/></a>
                    <a  href={whatsapp} target="_blank"><img src={imagemPerfil} alt="whatsapp"/></a>
                    <a  href={github} target="_blank"><img src={imagemPerfil} alt="github"/></a>
                    <p>{emailPerfil}</p>
                  
                </div>

            </div>
        </div>

       )
}


export default Perfil