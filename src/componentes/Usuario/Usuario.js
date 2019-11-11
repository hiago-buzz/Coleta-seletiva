import React, {useState, useEffect} from 'react'
import "./Usuario.scss"
import Info from './Info';
import {Link} from "react-router-dom"
import Voltar from "../img/back.png"
import {API_URL} from "../../api";


const Usuario = () => {
        
    const [data, setData] = useState({})
    const [noticias, setNoticias] = useState([])
    const [mostrar, setMostrar] = useState(false)              
    const id = localStorage.getItem("id"); 

    const MostrarSenha = () => {
        setMostrar(!mostrar);
    };

    useEffect(() => {
        fetch(`${API_URL}api/coletor/${id}/`, {
        method:"GET"
        }).then(result => {
          return result.json()
        }).then(data => {
            setData(data)
       }).catch(() => {
          console.error("Erro, sem conexão")
        })
      }, [id])  

  
      useEffect(() => {
        fetch(API_URL + 'api/noticia/', {
        method:"GET"
        }).then(result => {
          return result.json()
        }).then(noticias => {
            setNoticias(noticias)
       }).catch(() => {
          console.error("Erro, sem conexão")
        })
      }, [noticias])  

    return (
       <div className="Usuario">
           <header>
                <Link to="/"> <img src={Voltar} alt="voltar"/> voltar</Link>
           </header>
           <section id="editar">
               <h2>Seja Bem Vindo, {data.nome}</h2>
               <h3>Perfil</h3>
               <form>
                    <input type="text"  value={data.nome} required/>
                    <input type="text"  value={data.cpf} maxlength="11" required/>
                    <input type="text" value={data.bairro} required/>
                    <input type="email" value={data.email} required/>
                    <input type={(mostrar ? "text" : "password")} value={data.senha} required/>
                    <div>
                    <input type="checkbox" value="mostrar senha" onChange={MostrarSenha}/>
                    <label htmlFor="mostrar-senha">Mostrar senha</label>
                    </div>     
                    <input type="submit" value="Salvar"/>       
               </form>
                   
           </section>
           <aside id="informacoes">
               <h2>INFORMAÇÕES</h2>
               <div>
                   {noticias.map((item) =>{
                       return <Info assunto={item.titulo} conteudo={item.noticia} />
                    })}
                   
                </div>   

           </aside>
           <footer>
           <h2>Seja Bem Vindo, {data.nome}</h2>
           </footer>
       </div>
    )
    
}
export default Usuario
