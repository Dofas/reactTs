import React from 'react';
import './App.css';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div className="App">
      <Card onClick={()=> console.log('Clicked')} variant={CardVariant.outlined} width='450px' height='150px'>
        <button>click me</button>
        </Card>
    </div>
  );
}

export default App;
