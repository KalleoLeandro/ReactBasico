import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      model: "Enzo",
      color: "Amarelo",
      km: 0,
      newCar: true
    },
    {
      id: 2,
      brand: "Gol",
      model: "GTI",
      color: "Branco",
      km: 100000,
      newCar: false
    },
    {
      id: 3,
      brand: "GM",
      model: "Corsa",
      color: "Vermelho",
      km: 50000,
      newCar: false
    }
  ]

  return (
    <div className="App">
      <div className="titulo">
        <h1>Descrição de veículos</h1>
      </div>
      {cars.map((car)=> (<CarDetails key={car.id} brand={car.brand} model={car.model} color={car.color} km={car.km} newCar={car.new}/>))}      
    </div>
  );
}

export default App;
