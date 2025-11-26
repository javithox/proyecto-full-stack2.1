import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Regisrtar.css'; // Tu CSS corregido

const Registrar = () => {
  return (
    <div className="main-container">
        
        {/* Contenedor Bootstrap para la grilla */}
        <div className="container">
            <div className="row justify-content-center ">
                
                {/* COLUMNAS RESPONSIVE:
                    - Móvil (col-12): Ocupa toda la pantalla.
                    - Tablet (col-md-8): Un poco más angosto.
                    - PC (col-lg-5): Centrado y elegante.
                */}
                <div className="col-12 col-md-8 col-lg-5">
                    
                    <div className="contenedor-registrar">
                         <h1 className="titulo-pagina">REGISTRAR USUARIO</h1>
                    </div>

                    <form className="form-container">
                        
                        {/* Input Nombre */}
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control1" placeholder="Ingresa tu nombre" />
                        </div>

                        {/* Input Email */}
                        <div className="mb-3">
                            <label className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control2" placeholder="ejemplo@correo.com" />
                        </div>

                        {/* Input Password */}
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control3" placeholder="********" />
                        </div>

                        {/* Botón */}
                        <button type="submit" className="btn-btn-primary">
                            REGISTRARSE
                        </button>
                        
                        <a href="/login" className="texto-registrar">
                            ¿Ya tienes cuenta? Inicia sesión
                        </a>
                    </form>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Registrar;