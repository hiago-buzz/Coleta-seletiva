import React from 'react'
import './Acesso.scss'

const Acesso = ({titulo}) => {
    return (
        <div className="Acesso">
            <section>
                <h3>CADASTRO COLETOR</h3>
                <form action="#">
                <div>
                    <input type="text" placeholder="    Nome"/>
                    <input type="text" placeholder="    CPF"/>
                </div>
                 
                <input className="ipt" placeholder="    Email" type="email"/>
                <input className="ipt" placeholder="    Senha" type="password"/>
                <input className="ipt" type="submit" value="Cadastrar"/>
               
                </form>
            </section>
            <section>
                <h3>LOGIN</h3>
                <form action="#">
                <input className="ipt" placeholder="    Email" type="email"/>
                <input className="ipt" placeholder="    Senha" type="password"/>
                <input className="ipt" type="submit" value="Entrar"/>
                </form>
            </section>
        </div>
    )
}

export default Acesso
