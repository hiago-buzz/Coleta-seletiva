import React from 'react'
import "./Perfil.scss"


const Perfil = ({imagemPerfil, nomePerfil, pop, click, saturacao}) => {
      
    return(
        
       <div className="Perfil">

         <img className="foto" style={saturacao} src={imagemPerfil} alt="foto do usuario"/>
            
            <div className="barra">
                <strong>{nomePerfil}</strong> <strong onClick={click}>{pop}</strong>
            </div>
            
        </div>

       )
}




export default Perfil