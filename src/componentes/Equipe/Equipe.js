import React, {useState, useEffect} from 'react'
import './Equipe.scss'
import NavBack from '../NavBack/NavBack';
import Perfil from './Perfil/Perfil';
import Aberto from './Perfil/Aberto';
import imagemuser from '../img/perfil.jpg'


const Equipe = () => {
    
    const [mostrar, setMostrar] = useState(false)
    const [mostrar2, setMostrar2] = useState(false)

    const trocarUm = ()=>{
        if(!mostrar){
            setMostrar(!mostrar)
        }
        else if(mostrar){
            setMostrar(!mostrar)
        }
        
    }

    const trocarDois = ()=>{
        if(!mostrar2){
            setMostrar2(!mostrar2)
        }
        else if(mostrar2){
            setMostrar2(!mostrar2)
        }
        
    }

    
    
    // useEffect(()=>{
    //     trocarEstado()
    // }, [mostrar])

    return (
        <div className="Equipe">
        <NavBack />
         <header>
             <h2>EQUIPE DE DESENVOLVEDORES</h2>
         </header>
         <Perfil imagemPerfil={imagemuser} nomePerfil="HIAGO - DEV FULLSTACK" pop={!mostrar ? "+" :"-"}  click={trocarUm} />
         <Aberto style={!mostrar ? {display: "none"} : {display:"flex"}} nomeCompleto="Cícero Hiago Santos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." emailPerfil="hiago.dev@gmail.com"/>
         <Perfil imagemPerfil={imagemuser} nomePerfil="JOÃO - DEV FULLSTACK" pop={!mostrar2 ? "+" :"-"}  click={trocarDois} />
         <Aberto style={!mostrar2 ? {display: "none"} : {display:"flex"}} nomeCompleto="João Santos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." emailPerfil="hiago.dev@gmail.com"/>
         </div>
    )
}


export default Equipe;


