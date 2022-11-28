import { useState } from "react";
import axios from "axios";

import Logo from "../assets/takimundo-logo.png";

import "./Cadastro.css";

function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dtNasc, setDtNasc] = useState("");
    const [deMaior, setDeMaior] = useState(false)
    const [password, setPassword] = useState("");
    const [termosDeUso, setTermosDeUso] = useState(false)

    const getUser = async () => {
        verificaIdade();

        if(deMaior && termosDeUso){
            try{
                await axios.post(`http://localhost:3333/users`, {
                name: name.toLowerCase(),
                email: email.toLowerCase(),
                password: password,
                });

                console.log('deu certo')
            }finally{}
        }
        console.log(name, email, deMaior, password, termosDeUso);
    };

    const calculaIdade = (dataNasc) => {
        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        var anoNascParts = dataNasc.split('-');
        var diaNasc = anoNascParts[2];
        var mesNasc = anoNascParts[1];
        var anoNasc = anoNascParts[0];
        var idade = anoAtual - anoNasc;
        var mesAtual = dataAtual.getMonth() + 1;

        if(mesAtual < mesNasc){
            idade--;
        } else {
            if(mesAtual == mesNasc){
                if(new Date().getDate() < diaNasc ){
                    idade--;
                }
            }
        }
        return idade;
    }

    const verificaIdade = () => {
        var idade = calculaIdade(dtNasc)

        if(idade >= 18){
            return setDeMaior(true)
        }else if(idade < 18) {
            return setDeMaior(false)
        }
    }

    const handleChangeName = (e) => {
        setName((e.target.value));
    };

    const handleChangeEmail = (e) => {
        setEmail((e.target.value));
    };

    const handleChangeDtNasc = (e) => {
        setDtNasc(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeTermosDeUso = () => {
        setTermosDeUso(!termosDeUso)
    }

    return (
        <div className="container">
            <div className="container-cadastro">
                <div className="wrap-cadastro">
                <div>
                    <div className="logo"> <img src={Logo} alt="Projeto Takimundo"/> </div>
                    <h1 className="TextoCadastro">Cadastre-se</h1>
                </div>
                    <div>
                        <form>
                            <div className="formFild">

                                <input
                                    type="name"
                                    placeholder="Nome"
                                    value={name}
                                    onChange={(e) => handleChangeName(e)}
                                />

                                <div className="error" id="nameRequiredError">Nome é obrigatório</div>
                                <div className="error" id="nameInvalidError">Nome é inválido</div>
                            </div>
                            <div className="formFild">

                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => handleChangeEmail(e)}
                                />

                                <div className="error" id="emailRequiredError">E-mail é obrigatório</div>
                                <div className="error" id="emailInvalidError">E-mail é inválido</div>
                            </div>
                            <div className="formFild2">
                                <div>

                                    <input
                                        type="date"
                                        className="dtNasc"
                                        value={dtNasc}
                                        onChange={(e) => handleChangeDtNasc(e)}
                                    />

                                    <div className="error" id="dtNascRequiredError">Data de nascimento é obrigatória</div>
                                    <div className="error" id="dtNascInvalidError">Data inválida</div>

                                </div>
                                <div>

                                    <input
                                        type="password"
                                        value={password}
                                        className="password"
                                        placeholder="Senha"
                                        onChange={(e) => handleChangePassword(e)}
                                    />

                                    <div className="error" id="passwordRequiredError">Senha é obrigatória</div>
                                    <div className="error" id="passwordInvalidError">Senha é inválida</div>

                                </div>
                            </div>
                            <div className="formFild3">
                                <input
                                    type="checkbox"
                                    name="checkboxButton"
                                    id="checkboxButton"
                                    className="checkboxButton"
                                    onClick={(e) => handleChangeTermosDeUso(e)}
                                />
                                <p name="checkboxText" className="checkboxText"> Li e concordo com os <a className="termosDeUso">Termos de uso</a> </p>
                            </div>

                            <div className="buttonContainer">
                                <button
                                    type="button"
                                    className="outline"
                                    onClick={(e) => {e.preventDefault(); getUser()}}
                                >Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
