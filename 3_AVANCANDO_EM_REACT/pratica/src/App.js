import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const names = [
    {
      id:1,
      nome: 'Kalleo',
      idade: 34,
      profissao: "Desenvolvedor Java"
    },
    {
      id:2,
      nome: 'Leandro',
      idade: 28,
      profissao: 'Pedreiro'
    },
    {
      id:3,
      nome: 'Antônio',
      idade: 15,
      profissao: 'Estagiário'
    }
  ]

  return (
    <div className="App">      
      {names.map((names)=> (<UserDetails key={names.id} nome={names.nome} idade={names.idade} profissao={names.profissao} />))}
    </div>
  );
}

export default App;
