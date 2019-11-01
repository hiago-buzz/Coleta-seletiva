import React from 'react'
import './Dicas.scss'
import Topico from './Topico';

const Dicas = () => {
    return (
        <div className="Dicas">
            <section id="#descricao" className="descricao">
              <article>
                <div>
                    <h1>O QUE PODE SER RECICLADO?</h1>
                </div>
                <div className="topic">
                    <Topico titulo="Vidro" a="Potes de vidro" b="Copos" c="Garrafas" d="Embalagens de molho" e="Frascos de vidro" />
                    <Topico titulo="Plástico" a="Tampas" b="Potes de alimento" c="PET" d="Recipientes de limpeza" e="Sacos plásticos" />
                    <Topico titulo="Metal" a="Latas de aluminio" b="Latas de aço" c="Ferragens" d="Arame" e="Canos" />
                    <Topico titulo="Papel" a="Jornais" b="Revistas" c="Papelão" d="Envelopes" e="Rascunhos escritos" />
                   
                </div>
            
                </article>
              
            </section>

        </div>
    )
}

export default Dicas