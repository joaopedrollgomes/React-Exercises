import { useState } from 'react'
import '/src/App.css'

const MudandoEstado = () => {
    const [count, setCount] = useState(0);
    const [buttonColor, setButtonColor] = useState('black');
    const [nomeDaCor, setNomeDaCor] = useState('Preto');
  
    const handleClick = () => {
      if (count < 3) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setCount(0);
      }
  
      // Define a cor do botão com base no valor do contador
      switch (count) {
        case 0:
          setButtonColor('green');
          setNomeDaCor('Verde');
          break;
        case 1:
          setButtonColor('red');
          setNomeDaCor('Vermelho');
          break;
        case 2:
          setButtonColor('purple');
          setNomeDaCor('Roxo');
          break;
        default:
          setButtonColor('black');
          setNomeDaCor('Preto');
      }
    };
  
    return (
      <>
        <div className="card">
          <button
            onClick={handleClick}
            style={{ backgroundColor: buttonColor }}
          >
            Mudando Cor {count} = {nomeDaCor}
          </button>
        </div>
      </>
    );
  };
  
  export default MudandoEstado;