import { Component } from 'react';
import './App.css';
import { Spinner } from 'flowbite-react';

interface IState {
  isLoading: boolean;
  errorMessage: string | null;
  pessoa: object;
}
class App extends Component {
  state: IState = {
    isLoading: false,
    errorMessage: null,
    pessoa: {},
  };

  getRandomPerson = async () => {
    this.setState({
      isLoading: true,
      errorMessage: null,
    });

    try {
      const response = await fetch('https://api.randomuser.me/');
      // console.log(response);
      if (!response.ok) {
        console.log('Erro sinistro:', response);
        throw new Error('Sinistro.');
      }
      const json = await response.json();
      // console.log(json);

      this.setState({
        pessoa: json,
        errorMessage: null,
      });
    } catch (e) {
      // console.log('catch');
      let errorMessage;
      if (e instanceof Error) {
        errorMessage = e.message;
      } else {
        errorMessage = 'desconhecido';
      }
      this.setState({
        errorMessage,
      });
    } finally {
      // console.log('finally');
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    // console.log('componentDidMount');
    this.getRandomPerson().then();
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading && <Spinner aria-label="Extra large spinner example" size="xl" />}
        {!!this.state.errorMessage && <p className="border text-left">Erro! {this.state.errorMessage}</p>}
        {!this.state.isLoading && !this.state.errorMessage && <p>Olá, mundo! {JSON.stringify(this.state.pessoa)} </p>}
      </div>
    );
  }
}

export default App;
