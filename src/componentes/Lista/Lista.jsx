import React, { useEffect, useState } from 'react'
import "./Lista.scss";
import NavBack from '../NavBack/NavBack';
import {API_URL} from "../../api";
import Info from '../Usuario/Info';

const Lista = () => {
    const [chamadas, setChamadas] = useState([])

    useEffect(() => {
        fetch(API_URL + 'api/chamada/', {
        method:"GET"
        }).then(result => {
          return result.json()
        }).then(chamadas => {
            setChamadas(chamadas)
       }).catch(() => {
          console.error("Erro, sem conexão")
        })
      }, [chamadas])  


    return(
        <div className="Lista">
            <NavBack />
      
            {chamadas.map((chamada) =>{
                return <Info assunto={chamada.nome} conteudo={"Descrição: " + chamada.descricao} numero={"Nº " + chamada.numero} bairro={"Bairro: " + chamada.bairro}  endereco={ "Endereço: " + chamada.endereco}/>
            })}
           
        </div>
    )
}


export default Lista;