import React from 'react';
import './App.css';
import Classbasedform from '../src/components/Classbasedform'
import Simpleformhooks from '../src/components/Simpleformhooks'
import Example from '../src/components/Example'

function App() {
  return (
    <div className="App">
    <Classbasedform />
    <Simpleformhooks />
    <Example />

    </div>
  );
}

export default App;
