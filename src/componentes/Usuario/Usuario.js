import React, {useState, useEffect} from 'react'
import "./Usuario.scss"
import {Link} from "react-router-dom"
import Info from './Info';
import {API_URL} from "../../api";
import NavBack from '../NavBack/NavBack';
import Lista from '../Lista/Lista';

const Usuario = () => {
        
    const [data, setData] = useState({})
    const [noticias, setNoticias] = useState([])
    const [mostrar, setMostrar] = useState(false)              
    const id = localStorage.getItem("id"); 
    const [editar, setEditar] = useState(false)

    const MostrarSenha = () => {
        setMostrar(!mostrar);
    };

    const EditarPerfil = ()=>{
      setEditar(!editar);
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
         
           <section id="editar">
               <h2>Seja Bem Vindo, {data.nome}</h2>
               <form style={(!editar ? {display: "none"} : {display: "flex"})}>
                    <h3>Perfil</h3>  
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
                  <div>

                    <input className="editar" type="button" value="editar" onClick={EditarPerfil}/>       
                   <Link to="Lista"><input type="button" value="Solicitações" /></Link>
                  </div>
           </section>
           <aside id="informacoes">
               <h2>INFORMAÇÕES</h2>
               <div>
                   {noticias.map((item) =>{
                       return <Info key="dsds" assunto={item.titulo} conteudo={item.noticia} />
                    })
                    }

                </div>   

           </aside>
           <footer>
           <h2>Seja Bem Vindo, {data.nome}</h2>
           </footer>
           <NavBack />
       </div>
    )
    
}
export default Usuario
