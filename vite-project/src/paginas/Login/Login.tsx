import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    return (
        <div className="main-container">
            
            {/* NAVBAR SIEMPRE VISIBLE (SIN COLAPSABLE) */}
            <nav className="navbar neon-navbar">
                <div className="container-fluid d-flex flex-column flex-md-row align-items-center">
                    
                    {/* LOGO: Margen inferior en móvil (mb-2), margen derecho automático en PC (me-md-auto) */}
                    <a className="navbar-brand neon-brand mb-2 mb-md-0 me-md-auto" href="#">
                        GAMER ZONE
                    </a>
                    
                    {/* ENLACES: Lista flexible simple */}
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Registro</a>
                        </li>
                    </ul>

                </div>
            </nav>

            {/* CONTENIDO CENTRADO */}
            <div className="content-wrapper">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        
                        {/* COLUMNAS RESPONSIVE */}
                        <div className="col-12 col-md-8 col-lg-5 col-xl-4">
                            
                            <h1 className="titulo-iniciar">LOGIN SYSTEM</h1>

                            <div className="contenedor-iniciar">
                                <form>
                                    <div className="mb-4">
                                        <label className="texto1">ID DE USUARIO</label>
                                        <input 
                                            type="text" 
                                            className="form-control1" 
                                            placeholder="Escribe tu ID..." 
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="texto1">CÓDIGO DE ACCESO</label>
                                        <input 
                                            type="password" 
                                            className="form-control2" 
                                            placeholder="••••••••" 
                                        />
                                    </div>

                                    <button type="submit" className="btn-iniciar">
                                        ACCEDER
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