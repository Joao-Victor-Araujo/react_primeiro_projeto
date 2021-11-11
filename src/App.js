import './App.css';
import Cabecalho from './cabecalho/Cabecalho';
import Login from './login/Login';
import Rodape from './rodape/Rodape';

function App() {
  return (
    <div className="App">
      <Cabecalho mensagem="Tela login" />
      <Login />
      <Rodape />
    </div>
  );
}

export default App;
