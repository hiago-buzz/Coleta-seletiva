import React from 'react';
import './Acesso.scss';
import Nome from '../img/man-user.png';
import CPF from '../img/new-note.png';
import Email from '../img/envelope.png';
import Senha from '../img/lock.png';

const Acesso = ({titulo}) => {
    const nomeRef = React.useRef("");
    const cpfRef = React.useRef("");
    const emailRef = React.useRef("");
    const senhaRef = React.useRef("");

    const criarColetor = (event) => {
        event.preventDefault();

        fetch('http://127.0.0.1:8000/api/coletor/', {
            method: 'POST',
            body: JSON.stringify({
                nome: nomeRef.current.value,
                cpf: cpfRef.current.value,
                email: emailRef.current.value,
                senha: senhaRef.current.value,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            if (value.id) {
                
                alert("Cadastrado com sucesso!")
                localStorage.setItem("id", value.id)
                window.location = "/login"

            } else {
                alert("houve um erro")
            }

            nomeRef.current.value = "";
            cpfRef.current.value = "";
            emailRef.current.value = "";
            senhaRef.current.value = "";

        })
    }
    return (
        <div className="Acesso">
            <section>
                <h3>CADASTRO COLETOR</h3>
                <form onSubmit={criarColetor}>
                <div className="ipt-register">
                    <div>
                    <img src={Nome} alt="user"/>
                    <input type="text" ref={nomeRef} placeholder="    Nome" required />
                    </div>
                    <img src={CPF} alt="cpf"/>
                    <input type="text" ref={cpfRef} placeholder="    CPF" required />
                </div>
                <div className="ipt-register">
                <img src={Email} alt="email"/>
                <input className="ipt" ref={emailRef} placeholder="    Email" type="email" required />
                </div>
                <div className="ipt-register">
                <img src={Senha} alt="senha"/>
                <input className="ipt" ref={senhaRef} placeholder="    Senha" type="password" required />
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
