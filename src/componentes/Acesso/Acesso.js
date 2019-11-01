import React from 'react';
import './Acesso.scss';
import Nome from '../img/man-user.png';
import CPF from '../img/new-note.png';
import Email from '../img/envelope.png';
import Senha from '../img/lock.png';

const Acesso = ({titulo}) => {
    return (
        <div className="Acesso">
            <section>
                <h3>CADASTRO COLETOR</h3>
                <form action="#">
                <div className="ipt-register">
                    <div>
                    <img src={Nome} alt="user"/>
                    <input type="text" placeholder="    Nome" />
                    </div>
                    <img src={CPF} alt="cpf"/>
                    <input type="text" placeholder="    CPF"/>
                </div>
                <div className="ipt-register">
                <img src={Email} alt="email"/>
                <input className="ipt" placeholder="    Email" type="email"/>
                </div>
                <div className="ipt-register">
                <img src={Senha} alt="senha"/>
                <input className="ipt" placeholder="    Senha" type="password"/>
                </div>
                
                <input className="ipt-sub" type="submit" value="Cadastrar"/>
               
                </form>
            </section>
            <section>
                <h3>LOGIN</h3>
                <form action="#">
                    <div>
                        <img src={Email} alt="email"/>
                        <input className="ipt" placeholder="    Email" type="email"/>
                    </div>
                    <div>
                        <img src={Senha} alt="senha"/>
                        <input className="ipt" placeholder="    Senha" type="password"/>
                    </div>
                <input className="ipt-sub" type="submit" value="Entrar"/>
                </form>
            </section>
        </div>
    )
}

export default Acesso
