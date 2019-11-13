import React from 'react'
import './Dicas.scss'
import Topico from './Topico';
import Papel from "../img/paper-bin.png"
import Plastico from "../img/plastic.png"
import Metal from "../img/metal.png"
import Vidro from "../img/glass-bin.png"

const Dicas = () => {
    return (
        <div className="Dicas">
            <section >
                <Topico material={Papel} titulo="PAPEL" a="copos de água" b="Salocas" c="Garrafas Pet" d="Isopor" e="Embalagens"/>
                <Topico material={Plastico} titulo="PLASTICO" a="copos de água" b="Salocas" c="Garrafas Pet" d="Isopor" e="Embalagens"/>
                <Topico material={Vidro} titulo="VIDRO" a="copos de água" b="Salocas" c="Garrafas Pet" d="Isopor" e="Embalagens"/>
                <Topico material={Metal} titulo="METAL" a="copos de água" b="Salocas" c="Garrafas Pet" d="Isopor" e="Embalagens"/>

            </section>

        </div>
    )
}

export default Dicas