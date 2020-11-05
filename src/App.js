import React, { useState } from 'react';
import './App.css';

function App() {

  const [media, setMedia] = useState(0);

  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  const [errorMax, setErrorMax] = useState(false);
  const [errorMin, setErrorMin] = useState(false);
  const [errorRange, setErrorRange] = useState(false);

  const [finishProcess, setFinishProcess] = useState(false);

  const handleChangeMax = (event) => {
    setMax(parseInt(event.target.value));
  };

  const handleChangeMin = (event) => {
    setMin(parseInt(event.target.value));
  };

  const validMax = () => {
    if (max <= 0) {
      setErrorMax(true);
    } else {
      setErrorMax(false);
    }
  };

  const validMin = () => {
    if (min <= 0) {
      setErrorMin(true);
    } else {
      setErrorMin(false);
    }
  };

  const validRange = () => {
    if (errorMax || errorMin) {
      return;
    }

    if (min >= max) {
      setErrorRange(true);
    } else {
      setErrorRange(false);
    }
  };

  const correrAlgoritmo = () => {
    const valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
      83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

    let i = 1;
    let suma = 0;
    let totalValido = 0;
    let totalEntradas = 0;

    while (totalEntradas < 100) {
      totalEntradas = totalEntradas + 1;
      if (valor[i] >= min && valor[i] <= max) {
        totalValido = totalValido + 1;
        suma = suma + valor[i];
      }
      i = i + 1;
    }

    if (totalValido > 0) {
      let newMedia = suma / totalValido;
      setMedia(newMedia);
    } else {
      setMedia(-999);
    }
    setFinishProcess(!finishProcess);
  };

  const buscarMedia = () => {
    validMax();
    validMin();
    validRange();
    console.log('buscarMedia', !errorMax && !errorMax && !errorRange)
    if (!errorMax && !errorMax && !errorRange) {
    correrAlgoritmo();
    }

  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <div className={'column'}>
            <label className='label'>
              Maximo
            </label>
            <input type={'number'} onChange={handleChangeMax} value={max}/>
            {errorMax && <h6 className='error'>El Maximo no puede estar vacio</h6>}
          </div>

          <div className={'column'}>
            <label className='label'>
              Minimo
            </label>
            <input type={'number'} onChange={handleChangeMin} value={min}/>
            {errorMin && <h6 className='error'>El Minimo no puede estar vacio</h6>}
          </div>
        </div>

        {errorRange && <span className='errorRange'>El minimo debe ser menor al maximo</span>}

        <button className='button' onClick={buscarMedia}>obtener media</button>

        {finishProcess && (
          <div className='result'>
            <span>{media}</span>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
