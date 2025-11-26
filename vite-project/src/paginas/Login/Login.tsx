import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    // 1. Estados para guardar lo que escribe el usuario
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    // 2. Función para manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Evita que la página se recargue

        try {
            // Hacemos la petición a tu Backend
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario, password }),
            });

            const data = await response.json();

            if (data.success) {
                alert(`¡Bienvenido! ${data.message}`);
                // Aquí podrías redirigir: window.location.href = '/Home';
            } else {
                alert('Error: ' + data.message);
            }

        } catch (error) {
            console.error('Error de conexión:', error);
            alert('No se pudo conectar con el servidor');
        }
    };

    return (
        <div className="main-container">

            {/* CONTENIDO CENTRADO */}
            <div className="content-wrapper">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-8 col-lg-5 col-xl-4">
                            
                            <h1 className="titulo-iniciar">Iniciar Sesión</h1>

                            <div className="contenedor-iniciar">
                                {/* Agregamos onSubmit al form */}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="texto1">USuario</label>
                                        <input 
                                            type="text" 
                                            className="form-control1" 
                                            placeholder="Escribe tu ID..."
                                            // Conectamos el input al estado
                                            value={usuario}
                                            onChange={(e) => setUsuario(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="texto1">Contraseña</label>
                                        <input 
                                            type="password" 
                                            className="form-control2" 
                                            placeholder="••••••••" 
                                            // Conectamos el input al estado
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <button type="submit" className="btn-iniciar">
                                        iniciar sesión
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;