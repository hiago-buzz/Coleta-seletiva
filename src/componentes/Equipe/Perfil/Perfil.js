import React from 'react'
import "./Perfil.scss"
import linkdn from "../../img/linkedin.png"
import whatsapp from "../../img/whatsapp.png"
import github from "../../img/github.png"

const Perfil = ({imagemPerfil, nomePerfil, pop, click}) => {
      
    return(
        
       <div className="Perfil">

         <img className="foto" src={imagemPerfil} alt="foto do usuario"/>
            
            <div className="barra">
                <strong>{nomePerfil}</strong> <strong onClick={click}>{pop}</strong>
            </div>
            
        </div>

       )
}




export default Perfil