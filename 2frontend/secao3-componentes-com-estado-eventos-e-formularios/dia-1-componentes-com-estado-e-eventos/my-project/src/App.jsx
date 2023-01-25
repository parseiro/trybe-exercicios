import React from 'react';
import './App.css'
import Imagem from "./Imagem.jsx";

class App extends React.Component {
    // const [count, setCount] = useState(0);

    state = {
        botao1: 0,
        botao2: 0,
        botao3: 0,
    };

    render() {
        // console.log(`renderizei`);
        return (
            <div className="App">
                <button onClick={() => this.setState((anterior, _) => (
                    {
                        ...anterior,
                        botao1: anterior.botao1 + 1
                    }))}>Botão 1: {this.state.botao1}</button>
                <button onClick={() => this.setState((anterior, _) => (
                    {
                        ...anterior,
                        botao2: anterior.botao2 + 1
                    }))}>Botão 2: {this.state.botao2}</button>
                <button onClick={() => this.setState((anterior, _) => (
                    {
                        ...anterior,
                        botao3: anterior.botao3 + 1
                    }))}>Botão 3: {this.state.botao3}</button>

                <Imagem mensagem={`Contador1: ${this.state.botao1}`}/>
            </div>
        );
    }
}

export default App
