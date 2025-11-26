import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    return (
        <div className="main-container">
            {/* CONTENIDO CENTRADO */}
            <div className="content-wrapper">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        
                        {/* COLUMNAS RESPONSIVE */}
                        <div className="col-12 col-md-8 col-lg-5 col-xl-4">
                            
                            <h1 className="titulo-iniciar">INICIAR</h1>

                            <div className="contenedor-iniciar">
                                <form>
                                    <div className="mb-4">
                                        <label className="texto1">Usuario:</label>
                                        <input 
                                            type="text" 
                                            className="form-control1" 
                                            placeholder="Escribe tu nombre de usuario..." 
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="texto1">Contraseña:</label>
                                        <input 
                                            type="password" 
                                            className="form-control2" 
                                            placeholder="••••••••" 
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