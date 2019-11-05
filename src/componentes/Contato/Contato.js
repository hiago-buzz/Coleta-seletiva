import React from 'react'
import './Contato.scss'
import Rede from './Rede';
import Facebook from '../img/facebook.png'
import Caieiras from '../img/caieiras.png'
import Instagram from '../img/instagram.png'
import Logo from '../img/logo-inteira-verde-modificado.png'
import {Link} from "react-scroll"



const Contato = () => {
  
    return (
        <div className="Contato">
            <div className="info">
                <Link to="/chamada"><p>Solicitação de Coleta em Lote</p></Link>
                <p>Caieiras - São Paulo</p>
                <Link to="Nav" spy={true} smooth={true} offset={-70} duration={500}><img src={Logo} alt="logo"/></Link>
                <p>(11) 4445-9200</p>
                <p>coleta@coleta.com.br</p>
            </div>
            <div className="social">
                <div className="icones-redes">
                    <Rede linkRedirect="https://www.facebook.com.br/prefeituradecaieiras/" imgRede={Facebook} descRede="Facebook"/>
                    <Rede linkRedirect="https://www.caieiras.sp.gov.br" imgRede={Caieiras} descRede="Prefeitura"/>
                    <Rede linkRedirect="https://www.instagram.com/prefeituradecaieiras/" imgRede={Instagram} descRede="instagram"/>
                </div>
       
            </div>
            <div className="marca">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8966.651472178037!2d-46.7673190134487!3d-23.363329019160446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee37db98e70ab%3A0xb035d3f2aae13c13!2sAv.%20Prof.%20Carvalho%20Pinto%2C%20207%20-%20Centro%2C%20Caieiras%20-%20SP%2C%2007700-000!5e0!3m2!1sen!2sbr!4v1572892655665!5m2!1sen!2sbr" title="google" width="310" height="250" frameborder="0" allowfullscreen=""></iframe>

                <p className="copyright">Copyright © 2019 Renova Caieiras. Todos os direitos reservados </p>
            </div>
        </div>
    )
}

export default Contato