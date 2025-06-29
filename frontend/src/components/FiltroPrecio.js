// src/components/FiltroPrecio.js
import React, { useState } from 'react';

const FiltroPrecio = ({ criptos, setCriptos, setOriginalCriptos }) => {
  const [minPrecio, setMinPrecio] = useState('');
  const [maxPrecio, setMaxPrecio] = useState('');

  const aplicarFiltros = () => {
    let criptosFiltrados = [...criptos];

    if (minPrecio) {
      criptosFiltrados = criptosFiltrados.filter((cripto) => cripto.precio_actual >= minPrecio);
    }

    if (maxPrecio) {
      criptosFiltrados = criptosFiltrados.filter((cripto) => cripto.precio_actual <= maxPrecio);
    }

    setCriptos(criptosFiltrados);
  };

  // Limpiar los filtros y mostrar todos los criptos
  const limpiarFiltros = () => {
    setMinPrecio('');
    setMaxPrecio('');
    setCriptos(setOriginalCriptos); // Restaurar la lista original
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="number"
        placeholder="Precio mínimo"
        value={minPrecio}
        onChange={(e) => setMinPrecio(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Precio máximo"
        value={maxPrecio}
        onChange={(e) => setMaxPrecio(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={aplicarFiltros}>Aplicar Filtros</button>
      <button onClick={limpiarFiltros} style={{ marginLeft: '10px' }}>
        Limpiar Filtros
      </button>
    </div>
  );
};

export default FiltroPrecio;
