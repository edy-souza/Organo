import { useState, useEffect } from "react";
import Banner from "./componentes/Banner";    // ImportaÃ§Ã£o do componente Banner
import Formulario from "./componentes/Formulario";   //ImportaÃ§Ã£o do componente FormulÃ¡rio
import Time from "./componentes/Time";

function App() { 
  const times = [
    { nome: 'Fogo', corPrimaria: '#ff8a29', corSecundaria: '#d9f7e9' },
    { nome: 'Água', corPrimaria: '#82cffa', corSecundaria: '#e8f8ff' },
    { nome: 'Grama', corPrimaria: '#a6d157', corSecundaria: '#fde8e2' },
    { nome: 'Elétrico', corPrimaria: '#e06b69', corSecundaria: '#fde7e8' },
    { nome: 'Psíquico', corPrimaria: '#db6ebf', corSecundaria: '#fae9f5' },
    { nome: 'Dragão', corPrimaria: '#ffba05', corSecundaria: '#fff5d9' },
    { nome: 'Fantasma', corPrimaria: '#57c278', corSecundaria: '#ffeedf' },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  // Carregar os cards do localStorage ao iniciar a aplicaÃ§Ã£o
  useEffect(() => {
    const colaboradoresSalvos = JSON.parse(localStorage.getItem('colaboradores')) || [];
    setColaboradores(colaboradoresSalvos);
  }, []);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novosColaboradores = [...colaboradores, colaborador];
    setColaboradores(novosColaboradores);
    // Salvar os cards no localStorage
    localStorage.setItem('colaboradores', JSON.stringify(novosColaboradores));
  };

  return (
    <div className="App"> 
      <Banner/>           
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
      />
      {times.map(time => (
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;