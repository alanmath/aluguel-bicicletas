import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroAluguel from './components/CadastroAluguel';
import ConfirmacaoErroAluguel from './components/ConfirmacaoErroAluguel';
import DevolucaoAluguel from './components/DevolucaoAluguel';
import ListagemAlugueis from './components/ListagemAlugueis';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cadastro-aluguel" component={CadastroAluguel} />
        <Route path="/confirmacao-erro-aluguel" component={ConfirmacaoErroAluguel} />
        <Route path="/devolucao-aluguel" component={DevolucaoAluguel} />
        <Route path="/listagem-alugueis" component={ListagemAlugueis} />
      </Switch>
    </Router>
  );
}

export default App;