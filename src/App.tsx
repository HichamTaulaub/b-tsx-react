import React from 'react';
import './styles.css';
import Greeting from './components/Greeting';
import Counter from './Counter';

function App() {
  return (
    <div className="container">
      <h1>Welcome to My React App</h1>
      <Greeting name="Chaouki" />
      <Counter />
    </div>
  );
}

export default App;


