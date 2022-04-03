import { useEffect, useState } from 'react';
import './App.css';
import Conta from './components/Conta';
import ContaForm from './components/ContaForm';
import NavBar from './components/NavBar';

function App() {

const [contas, setContas] = useState([]);
const [showCreateConta, setShowCreateConta] = useState(false);


const refresh = () =>{
  fetch("http://localhost:3030/get/contas",{method: "GET"}).then(res => res.json()).then((data) => {setContas(data);},(error) =>{console.log(error)})
}


const createConta = (conta) =>{
  let info = {
    method: "POST",
    headers:  new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(conta),
  }
  return fetch("http://localhost:3030/create/conta",info)
}

const deleteConta = (id) => {
  if(!window.confirm("Deseja mesmo deletar essa conta?")){
    return
  }
  const conta = {id: id}

  let info = {
    method: "POST",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(conta),
  }

  return fetch("http://localhost:3030/delete/conta",info)
}

const toggleShowCreateContaForm = () =>{
  
  setShowCreateConta((old) => {return !old})
}

useEffect(() => {
  fetch("http://localhost:3030/get/contas",{method: "GET"}).then(res => res.json()).then((data) => {setContas(data);},(error) =>{console.log(error)})
},[])

  return (
    <div className="App">
      <NavBar onclick={toggleShowCreateContaForm}></NavBar>
      <div className="container">
        
        <ContaForm show={showCreateConta} createconta={createConta} refresh={refresh} display={toggleShowCreateContaForm}/>
        {contas.map(conta => {

          return <Conta key={conta.id} id={conta.id} atualizar={refresh} deleteConta={deleteConta} credor={conta.credor} valor={conta.valor} descricao={conta.descricao} pagamentos={conta.pagamentos}></Conta>
        })}
      </div>
    </div>
  );
}

export default App;
