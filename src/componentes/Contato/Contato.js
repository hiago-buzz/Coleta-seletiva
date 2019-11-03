import React from 'react'
import './Contato.scss'
import Rede from './Rede';
import Facebook from '../img/facebook.png'
import Caieiras from '../img/caieiras.png'
import Instagram from '../img/instagram.png'

const Contato = () => {
  
    return (
        <div className="Contato">
            <div className="info">
                <p>mobile app</p>
                <p>Caieiras - São Paulo</p>
                <h2>COLETA SELETIVA</h2>
                <p>(11) 4445-9200</p>
                <p>coleta@coleta.com.br</p>
            </div>
            <div className="social">
                <div>
                    <Rede linkRedirect="https://www.facebook.com.br/prefeituradecaieiras/" imgRede={Facebook} descRede="Facebook"/>
                    <Rede linkRedirect="https://www.caieiras.sp.gov.br" imgRede={Caieiras} descRede="Prefeitura"/>
                    <Rede linkRedirect="https://www.instagram.com/prefeituradecaieiras/" imgRede={Instagram} descRede="instagram"/>
                </div>
       
            </div>
            <div className="marca">
                <p>Copyright © 2019 Gaia Caieiras. Todos os direitos reservados </p>
            </div>
        </div>
    )
}

export default Contato