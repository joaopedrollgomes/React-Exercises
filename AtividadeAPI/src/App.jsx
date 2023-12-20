import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [dadosPoke, setDadosPoke] = useState();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/berry/1/')
      .then((res) => {
        console.log(res.data);
        setDadosPoke(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        {dadosPoke && (
          <>
            <h1>Pokemon: {dadosPoke.name}</h1>
            <p>ID: {dadosPoke.id}</p>
            <p>Growth Time: {dadosPoke.growth_time}</p>
            <p>Max Harvest: {dadosPoke.max_harvest}</p>
            <p>Natural Gift Power: {dadosPoke.natural_gift_power}</p>
            <p>Size: {dadosPoke.size}</p>
            <p>Smoothness: {dadosPoke.smoothness}</p>
            <p>Soil Dryness: {dadosPoke.soil_dryness}</p>
            <p>Firmness: {dadosPoke.firmness.name}</p>
            <h2>Flavors:</h2>
            <ul>
              {dadosPoke.flavors.map((flavor, index) => (
                <li key={index}>
                  Potency: {flavor.potency}, Flavor: {flavor.flavor.name}
                </li>
              ))}
            </ul>
            <p>Item: {dadosPoke.item.name}</p>
            <p>Natural Gift Type: {dadosPoke.natural_gift_type.name}</p>
          </>
        )}
      </div>
    </>
  );
}

export default App;
