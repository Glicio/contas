import './App.css';
import Conta from './components/Conta';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Conta credor={"José Silva"} valor={"RS50,00"} descricao={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ea adipisci consequatur unde, sit ipsa? Fugit, dolore aperiam eos officia doloremque aspernatur dolorem sapiente tenetur est ipsam optio nostrum quis!"}></Conta>
      </header>
    </div>
  );
}

export default App;
