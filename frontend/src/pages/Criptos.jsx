import React from 'react';
import './Criptos.css'; 

const Criptos = ({ criptos }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Nombre</th>
            <th>Símbolo</th>
            <th>Precio Actual (USD)</th>
            <th>Última Actualización</th>
          </tr>
        </thead>
        <tbody>
          {criptos.map((cripto) => {
            const precio = parseFloat(cripto.precio_actual);
            const precioMostrado = !isNaN(precio) ? `$${precio.toFixed(2)}` : 'N/A';

            // Convertir la fecha UTC a la zona horaria local
            const fecha = new Date(cripto.ultima_actualizacion); 
            const fechaLocal = new Date(fecha.getTime() - fecha.getTimezoneOffset() * 60000); // Ajusta la hora a la zona horaria local
            const fechaMostrada = isNaN(fechaLocal) ? 'N/A' : fechaLocal.toLocaleString();

            return (
              <tr key={cripto.id}>
                <td>
                  {cripto.logo_url ? (
                    <img
                      src={cripto.logo_url}
                      alt={cripto.nombre}
                      style={{ width: '25px', height: '25px' }}
                    />
                  ) : (
                    '—'
                  )}
                </td>
                <td>{cripto.nombre}</td>
                <td>{cripto.simbolo}</td>
                <td>{precioMostrado}</td>
                <td>{fechaMostrada}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Criptos;
