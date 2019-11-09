import React, {useState, useEffect} from 'react'
import './Equipe.scss'
import NavBack from '../NavBack/NavBack';
import Perfil from './Perfil/Perfil';
import Aberto from './Perfil/Aberto';
import imagemuser from '../img/perfil.jpg'
import hiago from '../img/hiago.png'


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
         <Perfil imagemPerfil={hiago} saturacao={!mostrar ? {filter: "grayscale(1)"} : {filter: "grayscale(0)"}} nomePerfil="HIAGO - DEV FULLSTACK" pop={!mostrar ? "+" :"-"}  click={trocarUm} />
         <Aberto style={!mostrar ? {display: "none"} : {display:"flex"}} nomeCompleto="Cícero Hiago Santos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." linkLinkedin="https://www.linkedin.com/in/hiagosantos" linkGithub="https://github.com/hiago-buzz" linkWhatsapp="https://api.whatsapp.com/send?l=pt&phone=5511944632951" emailPerfil="hiago.dev@gmail.com"/>
         
         <Perfil imagemPerfil={imagemuser} nomePerfil="LUCAS - DEV FULLSTACK" pop={!mostrar2 ? "+" :"-"}  click={trocarDois} />
         <Aberto style={!mostrar2 ? {display: "none"} : {display:"flex"}} nomeCompleto="Lucas Barletta" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." emailPerfil="hiago.dev@gmail.com"/>

         <Perfil imagemPerfil={imagemuser} nomePerfil="JESSICA - DEV FULLSTACK" pop={!mostrar2 ? "+" :"-"}  click={trocarDois} />
         <Aberto style={!mostrar2 ? {display: "none"} : {display:"flex"}} nomeCompleto="Jessica Santos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." emailPerfil="hiago.dev@gmail.com"/>

         <Perfil imagemPerfil={imagemuser} nomePerfil="RENAN - DEV FULLSTACK" pop={!mostrar2 ? "+" :"-"}  click={trocarDois} />
         <Aberto style={!mostrar2 ? {display: "none"} : {display:"flex"}} nomeCompleto="Renan Campos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." emailPerfil="hiago.dev@gmail.com"/>

         <Perfil imagemPerfil={imagemuser} nomePerfil="ROGER - DEV FULLSTACK" pop={!mostrar2 ? "+" :"-"}  click={trocarDois} />
         <Aberto style={!mostrar2 ? {display: "none"} : {display:"flex"}} nomeCompleto="Roger Campos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." emailPerfil="hiago.dev@gmail.com"/>
        
        <footer>
            <p>
            Copyright © 2019 Renova Caieiras. Todos os direitos reservados
            </p>
        </footer>
         </div>

         
    )
}


export default Equipe;


