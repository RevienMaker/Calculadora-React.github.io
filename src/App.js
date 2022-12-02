import './App.css';
// import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
// import LogoFreeCodeCamp from './componentes/LogoFreeCodeCamp'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { useState } from 'react'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val)=>{
    setInput(input + val);
  };
  const EvaluarResultado = (val)=>{
    if(input){
      setInput(eval(input));
    }else{
      alert("Agrega un valor para poder evaluar")
    }
  };
  const Clear = ()=>{
    setInput('');
  };

  return (
    <div className="App">
      {/* <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de FreeCodeCamp'/>
      </div> */}
      {/* <LogoFreeCodeCamp
      src={freeCodeCampLogo}
      class='freecodecamp-logo'
      alt='Logo de FreeCodeCamp'/> */}
      
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={EvaluarResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={Clear}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
