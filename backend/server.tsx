
const express = require('express');
const cors = require('cors'); // Para permitir solicitudes desde React
// const bodyParser = require('body-parser'); // Incluido en Express desde v4.16

const app = express();
const PORT = 5000;

// === 1. Middlewares Esenciales ===

// A. CORS: Permite que el frontend (ej. localhost:3000) se conecte
app.use(cors({
  origin: 'http://localhost:8080' // O usa '*' para permitir todos (solo en desarrollo)
}));

// B. Body Parser: Permite a Express leer JSON en el cuerpo de las peticiones POST/PUT
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// === 2. Definición de Rutas (Endpoints) ===

// Ejemplo de Ruta GET: Obtener datos
app.get('/api/data', (req, res) => {
  // Lógica de negocio: leer de la DB, calcular, etc.
  const data = { 
    timestamp: new Date().toISOString(),
    message: '¡Conexión Backend Exitosa!'
  };
  res.status(200).json(data); // Envía una respuesta JSON con código 200 OK
});

// Ejemplo de Ruta POST: Recibir datos (ej. un formulario)
app.post('/api/submit', (req, res) => {
  // El cuerpo de la petición está en req.body
  const receivedData = req.body; 
  
  // Lógica de negocio: guardar en DB, validar, etc.
  console.log('Datos recibidos:', receivedData);

  // Enviar una respuesta de confirmación
  res.status(201).json({ 
    success: true, 
    message: 'Datos recibidos y procesados correctamente',
    yourData: receivedData
  });
});


// === 3. Inicio del Servidor ===
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express corriendo en http://localhost:${PORT}`);
});