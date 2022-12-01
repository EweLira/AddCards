import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Sentinela',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Duelista',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Controlador',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Iniciador',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F5',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const novoColaboradorAdicionado = (colaborador) => {
    
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className='App'>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => novoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time 
      key = {time.nome} 
      nome = {time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />
      )
    }
      


    </div>
  );
}

export default App;
