// collaborated with eric, anthony, daisy, christian, daisy, josh, viviana, richard

import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName = "Mamma" firstName = "Joe" age ={21} hairColor = "Black"/>
      <PersonCard lastName = "Bravo" firstName = "Johnny" age ={18} hairColor = "Black"/>
      <PersonCard lastName = "Clevenger" firstName = "Kye" age ={19} hairColor = "Black"/>
      <PersonCard lastName = "Smith" firstName = "Jerry" age ={37} hairColor = "Black"/>
    </div>
  );
}

export default App;

