import './App.css';
import persons from './data/persons';
import Person from './components/Person';

function App() {
  return (
    <div className='App'>
      {persons.map((person) => {
        return <Person key={persons.id} {...person} />;
      })}
    </div>
  )
}

export default App;