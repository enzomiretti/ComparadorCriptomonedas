// src/components/Graficos.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Graficos = ({ criptos }) => {
  // Preparar los datos para el gráfico
  const data = {
    labels: criptos.map(cripto => cripto.nombre),  // Usamos los nombres de las criptos como etiquetas
    datasets: [
      {
        label: 'Precio (USD)',
        data: criptos.map(cripto => cripto.precio_actual),  // Usamos los precios actuales de cada cripto
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,  // Ajuste de tensión para hacer el gráfico más fluido
        pointRadius: 5,  // Tamaño de los puntos
        pointBackgroundColor: 'rgb(75, 192, 192)',  // Color de los puntos
      },
    ],
  };

  // Configuración del gráfico
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          // Mostramos los precios en el eje Y con un formato adecuado
          callback: function(value) {
            return `$${value.toFixed(2)}`;  // Formato de precios con 2 decimales
          },
          maxTicksLimit: 10,  // Limitar la cantidad de marcas en el eje Y
        },
        min: 0,  // Aseguramos que el eje Y comience en 0
      },
      x: {
        ticks: {
          maxRotation: 45,  // Rota las etiquetas para mayor claridad
          minRotation: 45,  // Rota las etiquetas para mayor claridad
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `Precio: $${tooltipItem.raw.toFixed(2)}`;  // Formato de la herramienta emergente
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h2>Gráfico de Precios de Criptomonedas</h2>
      <Line data={data} options={options} /> {/* Usamos el componente Line con la configuración */}
    </div>
  );
};

export default Graficos;
