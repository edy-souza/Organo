import { useState } from "react";
import Banner from "./componentes/Banner";    // Importação do componente Banner
import Formulario from "./componentes/Formulario";   //Importação do componente Formulário
import Time from "./componentes/Time";

function App() { 

  const times = [
    {
      nome: 'Fogo',
      corPrimaria: '#ff8a29',
      corSecundaria: '#d9f7e9',
    },

    {
      nome: 'Água',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff',
    },
    
    {
      nome: 'Grama',
      corPrimaria: '#a6d157',
      corSecundaria: '#fde8e2',
    },

    {
      nome: 'Elétrico',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    
    {
      nome: 'Psíquico',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },
    
    {
      nome: 'Dragão',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9',
    },
    
    {
      nome: 'Fantasma',
      corPrimaria: '#57c278',
      corSecundaria: '#ffeedf',
    },
        
  ]

  const [colaboradores , setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores ([...colaboradores , colaborador])

  }

  return (
    <div className="App"> 
      <Banner/>           
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;

// Na linha 7 e linha 8 foram criados o componente Banner e Formulário