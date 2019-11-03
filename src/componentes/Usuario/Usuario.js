import React from 'react'
import "./Usuario.scss"
import Info from './Info';



const Usuario = () => {

    const [data, setData] = React.useState({})

    const id = localStorage.getItem("id");

    React.useEffect(() => {
        buscaPerfil();
    }, []);

    const buscaPerfil = () => {
        fetch('http://localhost:8000/api/coletor/' + id + '/')
        .then(result => {
            return result.json()
        }).then(data =>{
        setData(data);
        })
    }

    return (
       <div className="Usuario">
           <section>
               <h2>Seja Bem Vindo, José</h2>
               <form action="#">
                    <input type="text" value={data.nome}/>
                    <input type="text" value={data.cpf}/>
                    <input type="email" value={data.email}/>
                    <input type="password" value={data.senha}/>
                    <input type="submit" value="Salvar"/>
               </form>
           </section>
           <aside>
               <h2>INFORMAÇÕES</h2>
               <div>
                   <Info assunto="Horario de Coleta" conteudo="Todas as coletas devem ser realizadas de Segunda, QUarta e Sexta das 8 as 16h e entregue na Rua Antonio Manoel da Costa." />
                   <Info assunto="Normas de atuação" conteudo="Todas as coletas devem ser realizadas de Segunda, QUarta e Sexta das 8 as 16h e entregue na Rua Antonio Manoel da Costa." />
               </div>   

           </aside>
       </div>
    )
    
}
export default Usuario
