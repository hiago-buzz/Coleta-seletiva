import React from 'react'
import './Dicas.scss'
import Topico from './Topico';

const Dicas = () => {
    return (
        <div className="Dicas">
            <section id="#descricao" className="descricao">
              <article>
                <div>
                    <h1>POR QUE RECICLAR?</h1>
                </div>
                <div className="topic">
                    <Topico titulo="IMPORTÂNCIA DA RECICLAGEM" texto="A coleta seletiva é o recolhimento de materiais recicláveis que foram previamente separados do lixo comum pela população. Ao ser colocada em prática, ela permite que, por exemplo, vidro, papel, plástico e metais sejam utilizados na confecção de novos produtos. O reaproveitamento reduz a quantidade de resíduos que é destinada ao aterro sanitário, aumentando sua vida útil e preserva o meio ambiente." />
                    <Topico titulo="COMO DESCARTAR CORRETAMENTE" texto="A coleta seletiva é o recolhimento de materiais recicláveis que foram previamente separados do lixo comum pela população. Ao ser colocada em prática, ela permite que, por exemplo, vidro, papel, plástico e metais sejam utilizados na confecção de novos produtos. O reaproveitamento reduz a quantidade de resíduos que é destinada ao aterro sanitário, aumentando sua vida útil e preserva o meio ambiente." />
                </div>
                <div className="topic">

                    <Topico titulo="BENEFICIOS" texto="A coleta seletiva é o recolhimento de materiais recicláveis que foram previamente separados do lixo comum pela população. Ao ser colocada em prática, ela permite que, por exemplo, vidro, papel, plástico e metais sejam utilizados na confecção de novos produtos. O reaproveitamento reduz a quantidade de resíduos que é destinada ao aterro sanitário, aumentando sua vida útil e preserva o meio ambiente." />
                    <Topico titulo="MELHORANDO SUA CIDADE" texto="A coleta seletiva é o recolhimento de materiais recicláveis que foram previamente separados do lixo comum pela população. Ao ser colocada em prática, ela permite que, por exemplo, vidro, papel, plástico e metais sejam utilizados na confecção de novos produtos. O reaproveitamento reduz a quantidade de resíduos que é destinada ao aterro sanitário, aumentando sua vida útil e preserva o meio ambiente." />
                </div>
                </article>
              
            </section>

        </div>
    )
}

export default Dicas