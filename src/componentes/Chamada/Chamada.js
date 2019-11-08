import React, {useState, useEffect} from 'react'
import './Chamada.scss'
import {API_URL} from "../../api";
import NavBack from '../NavBack/NavBack';


const Chamada = () => {
  
    const nomeRef = React.useRef("");
    const cepRef = React.useRef("");
    const bairroRef = React.useRef("");
    const enderecoRef = React.useRef("");
    const numeroRef = React.useRef("");
    const complementoRef = React.useRef("");
    const telefoneRef = React.useRef("");
    const  descricaoRef = React.useRef("");

    const [data, SetData] = useState({})
    const [botao, setbotao] = useState(false)
   
    const trocarEstado = ()=>{
      setbotao(!botao)
    }
    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${cepRef.current.value}/json/`, {
        method:"GET"
        }).then(result => {
          return result.json()
        }).then(data => {
           SetData(data)
       }).catch(() => {
          console.error("Erro, sem conexão")
        })
      }, [botao])  

      const criarChamada = (event) => {
        event.preventDefault();

        fetch(API_URL + '/api/chamada/', {
          method:"POST",
          body: JSON.stringify({
            nome: nomeRef.current.value,  
            cep: cepRef.current.value,
            bairro: bairroRef.current.value,
            endereco: enderecoRef.current.value,
            numero: numeroRef.current.value,
            complemento: complementoRef.current.value,
            telefone: telefoneRef.current.value,
            descricao: descricaoRef.current.value,
          }),
          headers: {
            'Content-type': 'application/json'
        }
        }).then(chamada => {
          return chamada.json()
        }).then(chamada => {
          if(chamada.id) {
            alert("Solicitação efetuada.")
          }
          else {
            alert("houve um erro")
          }
            
            nomeRef.current.value = "";  
            cepRef.current.value = "";
            bairroRef.current.value = "";
            enderecoRef.current.value = "";
            numeroRef.current.value = "";
            complementoRef.current.value = "";
            telefoneRef.current.value = "";
            descricaoRef.current.value = "";
        })
      }

    
    return (
        <div className="Chamada">
            <NavBack />
            <h2>Solicitação de Coleta</h2>
            <p>Insira suas informações e a descrição do tipo de coleta personalizada</p>
            <form onSubmit={criarChamada}>
                <input type="text" ref={nomeRef} placeholder="Nome Completo" required/>
                <div>
                <input type="text" ref={cepRef}  placeholder="Insira seu CEP" required/> 
                <button onClick={trocarEstado}>></button>
                </div>
                <input type="text" ref={bairroRef}  value={data.bairro} className="disabled" placeholder="Bairro" disabled />
                <input type="text" ref={enderecoRef} value={data.logradouro} className="disabled" placeholder="Endereço" disabled/>
                <input type="text" ref={numeroRef} placeholder="Número" required/>
                <input type="text" ref={complementoRef} placeholder="Complemento" required/>
                <input type="text" ref={telefoneRef} placeholder="Telefone" required/>
                <textarea name="Descricao" ref={descricaoRef} id="descricao" cols="30" rows="10" placeholder="Insira a descrição da coleta" ></textarea>
                <input type="submit" value="Enviar"/>
            </form>
          
        </div>
    )
}

export default Chamada;