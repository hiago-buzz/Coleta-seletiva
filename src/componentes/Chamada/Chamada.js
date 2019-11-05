import React, {useState, useEffect} from 'react'
import './Chamada.scss'

const Chamada = () => {

    const cepRef = React.useRef("");
    const [data, SetData] = useState({})

    console.log(cepRef.current.value)
   
  
    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${cepRef.current.value}/json/`, {
        method:"GET"
        }).then(result => {
          return result.json()
        }).then(data => {
           SetData(data)
           console.log(data)
       }).catch(() => {
          console.error("Erro, sem conexão")
        })
      }, [cepRef.current.value])  

    return (
        <div className="Chamada">
            <h2>Solicitação de Coleta</h2>
            <p>Insira suas informações e a descrição do tipo de coleta personalizada</p>
            <form action="#">
                <input type="text"  placeholder="Nome Completo"/>
                <input type="text" ref={cepRef}  placeholder="Insira seu CEP e aperte Enter"/>
                <input type="text"  value={data.bairro} className="disabled" placeholder="Bairro" disabled/>
                <input type="text"  value={data.logradouro} className="disabled" placeholder="Endereço" disabled/>
                <input type="text"  placeholder="Número"/>
                <input type="text"  placeholder="Complemento"/>
                <input type="text"  placeholder="Telefone"/>
                <textarea name="Descricao" id="descricao" cols="30" rows="10" placeholder="Insira a descrição da coleta"></textarea>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Chamada;