import logo from './logo.svg';
import './App.css';
import StyledGlobal, { CorFundo } from './styledGlobal';
import Home from './page/Home/Home';
import Detalhes from './page/Detalhes/Detalhes';
import { useState } from 'react';

function App() {
  const [trocarDePagina, setTrocarDePagina] = useState(0)

  const changePage = (change) =>{
    setTrocarDePagina(change)
  }

  return (
    <>
    <CorFundo>

      <StyledGlobal/>
      {trocarDePagina === 0 ? (
        <Home pagina={() => changePage(0)}/>
      ) : (
        <Detalhes pagina={() => changePage(1)}/>
      )}

    </CorFundo>
    </>
  );
}

export default App;
