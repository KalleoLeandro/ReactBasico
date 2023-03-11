import './App.css';
import { useState } from "react";
import Night from './assets/img/night-sky.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionaRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const name = "Leal";

  const [message,setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  }

  const cars = [
    {
      id:1,
      brand: "Ferrari",
      model: "Enzo",
      color: "Amarelo",
      km: 0,
      newCar: true
    },
    {
      id:2,
      brand: "Gol",
      model: "GTI",
      color: "Branco",
      km: 100000,
      newCar: false
    },
    {
      id:3,
      brand: "GM",
      model: "Corsa",
      color: "Vermelho",
      km: 50000,
      newCar: false
    }
  ]

  function showMessage(){
    console.log('Mensagem sendo impressa')
  }


  return (
    <div className="App">
      <h1>Avançando em React</h1>      
      {/*Imagem em public*/}
      <div>
        <img src="/fantasy-night.png" alt="Fantasy Night" width="800" height="600"/>
      </div>
      {/*Imagem em src/assets*/}
      <div>
        <img src={Night} alt="Fantasy Night" width="800" height="600"/>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionaRender/>
      {/*props*/}
      <ShowUserName name={name}/>
      {/*destructuring*/}
      <CarDetails brand="VW" km= {100000} color="Azul"/>
      {/*reaproveitamento*/}      
      <CarDetails brand="Mitshubish" model="Lancer" km= {0} color="Preto" newCar={true}/>
      <CarDetails brand="Mitshubish" model="Pajero" km= {10} color="Vermelho" newCar={false}/>
      {/*Loop em array de objetos*/}
      {cars.map((car)=> (<CarDetails key={car.id} brand={car.brand} model={car.model} color={car.color} km={car.km} newCar={car.new}/>))}
      {/*Fragments*/}
      <Fragments propFragment="teste"/>
      {/*Children*/}
      <Container><p>texto omitido</p></Container>
      {/*Função*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*StateLift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      
    </div>
  );
}

export default App;
