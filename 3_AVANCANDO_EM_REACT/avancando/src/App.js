import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg";
import Cardetails from './components/Cardetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


function App() {
  //const name = "Camila";
  const [userName] = useState("Caio");

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id:2, brand: "KIA", color: "Branco", newCar: false, km: 154000},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 234}
  ];

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  };

  return (
    <div className="App">
     <h1>Avançando em React</h1>
     {/*Imagem em public */}
     <div>
      <img src="/img1.jpg" alt="Paisagem" />
     </div>
     {/* Imagem em asset */}
     <div>
      <img src={City} alt="Cidade" />
     </div>
     <ManageData/>
     <ListRender/>
     <ConditionalRender/>
     {/* props */}
     <ShowUserName name={userName}/>
     {/* desctruturing */}
     <Cardetails brand ="VW" km={10000} color="Rosa" newCar={false}/>
     {/* reaproveitando */}
     <Cardetails brand ="Ford" color="Vermelha" km={0} newCar={true}/>
     <Cardetails brand ="Fiat" color="Branco"km={4500} newCar={false}/>
     {/* loop em array de objetos*/}
     {cars.map((car)=>(
      <Cardetails
      key={car.id}
      brand={car.brand}
      color={car.color}
      km={car.km}
      newCar={car.newCar}
      />
     ))}
     {/* fragment */}
     <Fragments propFragments="teste"/>
     {/* children */}
     <Container myValue="Testing">
        <p>E este é o conteúdo</p>
     </Container>
     <Container myValue="Testing 2">
        <h5>Testando o container</h5>
     </Container>
     {/* executar funçao */}
     <ExecuteFunction myFunction={showMessage}/>
     {/* state lift */}
     <Message msg={message}/>
     <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
