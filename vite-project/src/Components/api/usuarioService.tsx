// En un componente React
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. Petición GET para obtener datos
    axios.get('jdbc:postgresql://levelup-db.cyiy9wonqxdz.us-east-1.rds.amazonaws.com:5432/postgres') // <--- Sustituye por la URL de tu backend
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al conectar:", error);
      });
  }, []);

  // 2. Renderizado de los datos
  return (
    <div>
      {data ? <h1>¡Conectado! El primer usuario es: {data[0].name}</h1> : <p>Cargando...</p>}
    </div>
  );
}