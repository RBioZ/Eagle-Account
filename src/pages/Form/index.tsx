import React from 'react';

//images
import imageApp from '../../assets/images/mockup-app.png';
import logo from '../../assets/images/logo-eagle.png';

import './styles.css'

function App() {
  return (
    <div className="container">
        <div className="left-content">
            <div id="layer">
                <div id="image">
                  <img src={imageApp} alt="Proffy" />
                </div>

                <h1>Precisamos dos Seus Dados Para Seguirmos Com o Cadastro</h1>
                <p>Para que possamos criar sua conta no Eagle Bank Digital é necessário que você preencha campos solicitados.
                Não se preocupe, seus dados estão seguros</p>

                <div className="progress-bar">
                  <div>
                    <p>Criacao de Conta</p>
                  </div>
                </div>
            </div>
        </div>
        <div className="right-content">
            <div id="img">
              <img src={logo} alt="Proffy" />
            </div>

            <form className="form-container">
              <div className="form-input">
                <label>Nome Completo</label>
                <input placeholder="Nome Completo" type="text" />
              </div>
              <div className="form-input">
                <label>CPF</label>
                <input placeholder="CPF" type="text" />
              </div>
              <div className="form-input">
                <label>E-mail</label>
                <input placeholder="E-mail" type="text" />
              </div>
              <div className="form-input">
                <label>Senha</label>
                <input placeholder="Senha" type="text" />
              </div>
              <div className="form-input">
                <label>Telefone</label>
                <input placeholder="Telefone" type="text" />
              </div>
              <div className="form-input">
                <label>Codigo do Indicante</label>
                <input placeholder="Codigo do Indicante" type="text" />
              </div>
              <button type="submit">Proximo</button>
            </form>
        </div>
    </div>
  );
}

export default App;
