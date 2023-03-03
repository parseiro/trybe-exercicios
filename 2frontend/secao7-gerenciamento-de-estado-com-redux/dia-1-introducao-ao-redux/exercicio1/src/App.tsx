import './App.css';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

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
      newIndex = (currentIndex - 1) % colors.length;
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

const valor = document.getElementById('value');
loja.subscribe(() => {
  const { colors, index } = loja.getState();
  console.log(`Novo index: ${index}, Nova cor: ${colors[index]}`);
  if (valor) {
    valor.innerText = colors[index];
  }
});

function App() {
  return (
    <div className="App">
      <div id="container">
        <p>
          Color: <span id="value">white</span>
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
