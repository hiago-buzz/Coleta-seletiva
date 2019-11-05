import React, {useState, useEffect} from 'react'
import "./Usuario.scss"
import Info from './Info';
import {Link} from "react-scroll"


const Usuario = () => {

        
        const [data, setData] = useState({})
        const [mostrar, setMostrar] = useState(false)        
        const [checked, setChecked] = useState(false)        
        const id = localStorage.getItem("id");
        
        
        useEffect(() => {
            buscaPerfil();
        }, []);
        
        const MostrarSenha = () => {
          setMostrar(!mostrar);
        };
      
   

    const buscaPerfil = () => {
        fetch(`http://localhost:8000/api/coletor/${id}/`)
        
        .then(result => {
            return result.json()
        }).then(data =>{
        setData(data);
        })
    }
  
    return (
       <div className="Usuario">
           <header>
                <Link to="section">Editar</Link>
                <Link to="aside">Informações</Link>
           </header>
           <section id="editar">
               <h2>Seja Bem Vindo, {data.nome}</h2>
               <form>
                    <input type="text"  value={data.nome} required/>
                    <input type="text"  value={data.cpf} required/>
                    <input type="email" value={data.email} required/>
                    <input type={(mostrar ? "text" : "password")} value={data.senha} required/>
                    <div>
                    <input type="checkbox" value="mostrar senha"   onChange={MostrarSenha} required/>
                    <label htmlFor="mostrar-senha">Mostrar senha</label>
                    </div>
                    <input type="submit" value="Salvar"/>       
               </form>
                   
           </section>
           <aside id="informacoes">
               <h2>INFORMAÇÕES</h2>
               <div>
                   <Info spy={true} smooth={true} offset={-70} duration={500} assunto="Horario de Coleta" conteudo="Todas as coletas devem ser realizadas de Segunda, QUarta e Sexta das 8 as 16h e entregue na Rua Antonio Manoel da Costa." />
                   <Info assunto="Normas de atuação" conteudo="Todas as coletas devem ser realizadas de Segunda, QUarta e Sexta das 8 as 16h e entregue na Rua Antonio Manoel da Costa." />
               </div>   

           </aside>
       </div>
    )
    
}
export default Usuario
