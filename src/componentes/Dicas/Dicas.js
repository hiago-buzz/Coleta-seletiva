import React from 'react'
import './Dicas.scss'
import Topico from './Topico';

const Dicas = () => {
    return (
        <div className="Dicas">
            <section className="descricao">
              <article>
                <div>
                    <h1>POR QUE RECICLAR?</h1>
                </div>
                <div className="topic">
                    <Topico titulo="importância de Reciclar" texto="fndksfnskfndkfndksfnkcxndskfnvkdsndksvnkxvnkvnkvnknvkxcnvkcx" />
                    <Topico titulo="importância de Reciclar" texto="fndksfnskfndkfndksfnkcxndskfnvkdsndksvnkxvnkvnkvnknvkxcnvkcx" />
                </div>
                <div className="topic">

                    <Topico titulo="importância de Reciclar" texto="fndksfnskfndkfndksfnkcxndskfnvkdsndksvnkxvnkvnkvnknvkxcnvkcx" />
                    <Topico titulo="importância de Reciclar" texto="fndksfnskfndkfndksfnkcxndskfnvkdsndksvnkxvnkvnkvnknvkxcnvkcx" />
                </div>
                </article>
              
            </section>

        </div>
    )
}

export default Dicas