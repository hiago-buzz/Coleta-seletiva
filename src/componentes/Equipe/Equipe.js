import React, {useState, useEffect} from 'react'
import './Equipe.scss'
import NavBack from '../NavBack/NavBack';
import Perfil from './Perfil/Perfil';
import imagemuser from '../img/perfil.jpg'


const Equipe = () => {
 
    return (
        <div className="Equipe">
        <NavBack />
         <header>
             <h2>EQUIPE DE DESENVOLVEDORES</h2>
         </header>
         <Perfil imagemPerfil={imagemuser} nomePerfil="Hiago Santos" pop="-" descricaoPerfil="aaaaaaaaaaaaaaaaaaaaa"  />
         </div>
    )
}


export default Equipe;


