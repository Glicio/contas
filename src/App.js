import './App.css';
import Conta from './components/Conta';
import ContaForm from './components/ContaForm';

function App() {

const contasTeste = [
  {
    credor: "Credor1",
    valor: 599.55,
    descricao: "Aquisição com objetivo de testar se essa bagaça funciona",
    pagamentos: [
      {
        valor: 400.00,
        data: "15/03/2022"
      },
      {
        valor: 50.93,
        data: "25/03/2022"
      }
    ]
  },
  {
    credor: "Credor2",
    valor: 1200.55,
    descricao: "Aquisição com objetivo de testar se essa bagaça funciona",
    pagamentos: [
      {
        valor: 700.00,
        data: "15/03/2022"
      },
      {
        valor: 50.93,
        data: "25/03/2022"
      }
    ]
  }
] 
  return (
    <div className="App">
      <header className="App-header">
        <ContaForm/>
        {contasTeste.map(conta => {
          return <Conta credor={conta.credor} valor={conta.valor} descricao={conta.descricao} pagamentos={conta.pagamentos}></Conta>
        })}
      </header>
    </div>
  );
}

export default App;
