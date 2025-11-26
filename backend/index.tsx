// backend/index.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Permite que React se conecte a este servidor
app.use(express.json()); // Permite recibir JSON del frontend

// Configuración de PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER || 'levelup_admin',
  host: process.env.DB_HOST || 'jdbc:postgresql://levelup-db.cyiy9wonqxdz.us-east-1.rds.amazonaws.com',
  database: process.env.DB_NAME || 'levelup-db', // Tu base de datos
  password: process.env.DB_PASSWORD || 'javithox2025',
  port: process.env.DB_PORT || 5432,
});

// --- RUTA DE PRUEBA (LOGIN) ---
app.post('/api/login', async (req, res) => {
  const { usuario, password } = req.body;

  try {
    // AQUÍ HACES LA CONSULTA A TU BASE DE DATOS
    // Ejemplo: Buscar si el usuario existe
    // const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [usuario]);
    
    // SIMULACIÓN (Borra esto y descomenta lo de arriba cuando tengas la tabla):
    console.log('Recibido:', usuario, password);
    
    if (usuario === 'admin' && password === '1234') {
        res.json({ success: true, message: 'Login Exitoso', user: 'Admin Gamer' });
    } else {
        res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(errorMessage);
    res.status(500).send('Error del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});