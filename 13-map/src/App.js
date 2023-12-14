import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const text = ['Click me!', 'Click me please!', 'Hit me!', 'Press me!', 'Touch me!', 'Destroy me!'];

function App() {
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter countProps={count} />
      {text.map((text, index) => (
        <Button key={index} onClick={incrementCount} text={text} />
      ))}
    </div>
  );
}

export default App;
