import React from 'react';
import './App.css';
import Classbasedform from '../src/components/Classbasedform'
import Simpleformhooks from '../src/components/Simpleformhooks'
import Example from '../src/components/Example'
import Starwars from '../src/components/Starwars'
import Todoapp from '../src/components/Todoapp'

function App() {
  return (
    <div className="App">
    <Classbasedform />
    <Simpleformhooks />
    <Example />
    <Starwars />
    <Todoapp />
    </div>
  );
}

export default App;
