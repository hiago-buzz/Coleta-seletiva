import React from 'react'
import './Coleta.scss'
import Postos from './Postos';
import Posto1 from '../img/posto1.jpg'
import Posto2 from '../img/posto2.jpg'
import Posto3 from '../img/posto3.jpg'
import Posto4 from '../img/posto4.jpg'


const Coleta = () => {
    return (
        <div className="Coleta">
            <section className="sec">
                <div className="cabecalho">
                    <h2>PONTOS DE COLETA</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, ea dolorem perferendis laudantium odit dolorum quae.</p>
                </div>
                <div className="locais">
                <div>
                 <Postos img={Posto1} alt="posto de coleta" endereco="Rua da cacimba nº200" hora="8:30 à 20h" />
                 <Postos img={Posto2} alt="posto de coleta" endereco="Rua da cacimba nº200" hora="8:30 à 20h" />
                </div>
                <div>
                 <Postos img={Posto3} alt="posto de coleta" endereco="Rua da cacimba nº200" hora="8:30 à 20h" />
                 <Postos img={Posto4} alt="posto de coleta" endereco="Rua da cacimba nº200" hora="8:30 à 20h" />
                </div>
                </div>
            </section>
        </div>
    )
}

export default Coleta