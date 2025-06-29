// src/App.js
import React, { useEffect, useState } from 'react';
import { obtenerCriptomonedas } from './services/criptomonedasService';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';
import Criptos from './pages/Criptos';
import FiltroPrecio from './components/FiltroPrecio';
import Graficos from './components/Graficos';  // Importamos el componente de gráficos

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const [criptos, setCriptos] = useState([]);
  const [originalCriptos, setOriginalCriptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      const data = await obtenerCriptomonedas();
      console.log('Datos obtenidos:', data); // Verifica qué se recibe de la API
      setCriptos(data);
      setOriginalCriptos(data);  // Guardamos los datos originales
      setLoading(false);
    };
    cargarDatos();
  }, []);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={toggleTheme} style={{ float: 'right', margin: '10px' }}>
        Light / Dark
      </button>
      <h1>Comparador de Criptomonedas 🏛️</h1>
      {/* Agregamos el componente de FiltroPrecio */}
      <FiltroPrecio
        criptos={criptos}
        setCriptos={setCriptos}
        setOriginalCriptos={originalCriptos}
      />
      <Criptos criptos={criptos} />
      {/* Agregamos el componente de Gráficos */}
      <Graficos criptos={criptos} />
    </div>
  );
}

export default App;
