import React, { Component } from 'react';
import './App.css';
import { Spinner } from 'flowbite-react';
import { Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

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

  componentDidMount() {
    // this.getRandomPerson().then();
  }

  render() {
    return (
      <div className="md:container mx-auto">
        <Navbar limit="sm" />
        {this.state.isLoading && <Spinner aria-label="Extra large spinner example" size="xl" />}
        {!!this.state.errorMessage && <p className="border text-left">Erro! {this.state.errorMessage}</p>}

        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
