import React, { Component } from 'react';
import './App.scss';
import Calculator from './components/Calculator'
import ErrorBoundary from './components/ErrorBoundary'

class App extends Component {
  render() {

    return (
      <div className="App">
        <ErrorBoundary>
          <Calculator />
        </ErrorBoundary>
      </div>
    );
  }

}

export default App;
