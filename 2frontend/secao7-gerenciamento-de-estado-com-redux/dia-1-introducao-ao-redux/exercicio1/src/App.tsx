import './App.css';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { useState } from 'react';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const PROXIMA_COR = 'PROXIMA COR';
const ANTERIOR_COR = 'ANTERIOR COR';

const redutor = (state = INITIAL_STATE, acao) => {
  const { type } = acao;
  const { colors, index: currentIndex } = state;
  let newIndex;
  switch (type) {
    case PROXIMA_COR:
      newIndex = (currentIndex + 1) % colors.length;
      break;
    case ANTERIOR_COR:
      if (currentIndex === 0) newIndex = colors.length - 1;
      else newIndex = (currentIndex - 1) % colors.length;
      break;
    default:
      return state;
  }
  // console.log(`Index atual: ${currentIndex}, novo index: ${newIndex}`);
  return {
    ...state,
    index: newIndex,
  };
};

const loja = createStore(redutor, composeWithDevTools());

function App() {
  const [valor, setValor] = useState('');

  loja.subscribe(() => {
    const { colors, index } = loja.getState();
    console.log(`Novo index: ${index}, Nova cor: ${colors[index]}`);
    setValor(colors[index]);
  });

  return (
    <div className="App">
      <div id="container">
        <p>
          Color: <span id="value">{valor}</span>
        </p>
        <button id="previous" onClick={() => loja.dispatch({ type: ANTERIOR_COR })}>
          Previous color
        </button>
        <button id="next" onClick={() => loja.dispatch({ type: PROXIMA_COR })}>
          Next color
        </button>
      </div>
    </div>
  );
}

export default App;
