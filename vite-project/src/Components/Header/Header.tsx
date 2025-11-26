import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-image/image-removebg-preview.png';
// Importamos Bootstrap CSS y JS (El JS es vital para el menú móvil)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

const Header = () => {
    return (
        // Usamos 'navbar' de Bootstrap en lugar de un header genérico
        <nav className="navbar navbar-expand-lg main-header">
            <div className="container-fluid">
                
                {/* 1. LOGO */}
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="Logo" />
                </Link>

                {/* 2. BOTÓN HAMBURGUESA (Solo visible en móvil/tablet) */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* 3. ENLACES (Se agrupan dentro del colapsable) */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Nosotros">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contacto">Contacto</Link>
                        </li>
                        
                        {/* Separador visual o enlaces destacados */}
                        <li className="nav-item">
                            <Link className="nav-link special-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link special-link" to="/Registrar">Registrar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CarritoCompras">
                                🛒 Carrito
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;