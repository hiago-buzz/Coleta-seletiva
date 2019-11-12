import React, {useState} from 'react'
import './Equipe.scss'
import NavBack from '../NavBack/NavBack';
import Perfil from './Perfil/Perfil';
import Aberto from './Perfil/Aberto';
import hiago from '../img/hiago.png'
import lucas from '../img/lucas.jpg'
import jessica from '../img/jessica.jpeg'
import roger from '../img/roger.jpeg'
import renan from '../img/renan.jpeg'


const Equipe = () => {
    
    const [mostrar, setMostrar] = useState(false)
    const [mostrar2, setMostrar2] = useState(false)
    const [mostrar3, setMostrar3] = useState(false)
    const [mostrar4, setMostrar4] = useState(false)
    const [mostrar5, setMostrar5] = useState(false)

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


    const trocarTres = ()=>{
        if(!mostrar3){
            setMostrar3(!mostrar3)
        }
        else if(mostrar3){
            setMostrar3(!mostrar3)
        }
        
    }


    const trocarQuatro = ()=>{
        if(!mostrar4){
            setMostrar4(!mostrar4)
        }
        else if(mostrar4){
            setMostrar4(!mostrar4)
        }
        
    }
    const trocarCinco = ()=>{
        if(!mostrar5){
            setMostrar5(!mostrar5)
        }
        else if(mostrar5){
            setMostrar5(!mostrar5)
        }
        
    }
    
    
    

    return (
        <div className="Equipe">
        <NavBack />
         <header>
             <h2>EQUIPE DE DESENVOLVEDORES</h2>
         </header>
         <Perfil imagemPerfil={hiago} nomePerfil="HIAGO - DEV FULLSTACK" pop={!mostrar ? "+" :"-"}  click={trocarUm} />
         <Aberto style={!mostrar ? {display: "none"} : {display:"flex"}} nomeCompleto="Cícero Hiago Santos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." linkLinkedin="https://www.linkedin.com/in/hiagosantos" linkGithub="https://github.com/hiago-buzz" linkWhatsapp="https://api.whatsapp.com/send?l=pt&phone=5511944632951" emailPerfil="hiago.dev@gmail.com"/>
         
         <Perfil imagemPerfil={lucas} nomePerfil="LUCAS - DEV FULLSTACK" pop={!mostrar2 ? "+" :"-"}  click={trocarDois} />
         <Aberto style={!mostrar2 ? {display: "none"} : {display:"flex"}} nomeCompleto="Lucas Barletta" descricaoPerfil="Game Designer e Dev FullStack" linkLinkedin="https://www.linkedin.com/in/lucas-barletta/" linkGithub="https://github.com/LucasBarletta" linkWhatsapp="https://api.whatsapp.com/send?l=pt&phone=5511987195631"  emailPerfil="lubarlettamunhoz@gmail.com"/>

         <Perfil imagemPerfil={jessica} nomePerfil="JESSICA - DEV FULLSTACK" pop={!mostrar3 ? "+" :"-"}  click={trocarTres} />
         <Aberto style={!mostrar3 ? {display: "none"} : {display:"flex"}} nomeCompleto="Jessica Franco" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST."  linkLinkedin="#" linkGithub="https://github.com/jessfranco21" linkWhatsapp="https://api.whatsapp.com/send?l=pt&phone=5511945477006" emailPerfil="jessica.fo003@gmail.com"/>

         <Perfil imagemPerfil={renan} nomePerfil="RENAN - DEV FULLSTACK" pop={!mostrar4 ? "+" :"-"}  click={trocarQuatro} />
         <Aberto style={!mostrar4 ? {display: "none"} : {display:"flex"}} nomeCompleto="Renan Campos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." linkLinkedin="https://www.linkedin.com/in/renan-campos-32ba49193/" linkGithub="https://github.com/wakingupdizzy" linkWhatsapp="https://api.whatsapp.com/send?l=pt&phone=5511941706784"emailPerfil="camposrenanrc@gmail.com"/>

         <Perfil imagemPerfil={roger} nomePerfil="ROGER - DEV FULLSTACK" pop={!mostrar5 ? "+" :"-"}  click={trocarCinco} />
         <Aberto style={!mostrar5 ? {display: "none"} : {display:"flex"}} nomeCompleto="Roger Campos" descricaoPerfil="Desenvolvedor Fullstack com Foco em React.js e Django REST." linkLinkedin="https://www.linkedin.com/in/roger-campos" linkGithub="https://github.com/rogercamposj" linkWhatsapp="https://api.whatsapp.com/send?l=pt&phone=5511975790154" emailPerfil="rogercamposj@gmail.com"/>
        
        <footer>
            <p>
            Copyright © 2019 Renova Caieiras. Todos os direitos reservados
            </p>
        </footer>
         </div>

         
    )
}


export default Equipe;


