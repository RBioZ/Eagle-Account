import React from 'react';
import imageApp from '../../assets/images/mockup-app.png'

import './styles.css'

function App() {
  return (
    <div className="container">
        <div className="left-content">
            <div id="layer">
                <img src={imageApp} alt="Proffy" />
                <h1>Precisamos dos Seus Dados Para Seguirmos Com o Cadastro</h1>
                <p>Para que possamos criar sua conta no Eagle Bank Digital é necessário que você preencha campos solicitados.
                Não se preocupe, seus dados estão seguros</p>
            </div>
        </div>
        <div className="right-content">
            <p>Right-Content</p>
        </div>
    </div>
  );
}

export default App;
