import React from "react";
import './blogs.css';
import { Link } from "react-router-dom"; // Importante importar Link
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog3 = () => {
    return (
        <main className="main-container">
            <div className="container">
                
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h2 className="titulo-blog">LANZAMIENTOS FUTUROS</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <img 
                                src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" 
                                alt="Gaming Setup" 
                                className="imagen-blog"
                            />
                            <p className="parrafo-blog">
                                <strong style={{color: '#39ff14'}}>Bienvenido al Blog 3.</strong> 
                                Este es el lugar para rumores y noticias sobre los juegos que saldrán el próximo año.
                                ¿Cuál es el título que más esperas?
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar-content">
                            
                            <h3 className="titulo-otros-blogs" style={{fontSize: '1.2rem'}}>TU OPINIÓN</h3>
                            <form className="form-area">
                                <textarea rows={4} placeholder="¿Qué juego esperas?"></textarea>
                                <input type="submit" value="Enviar" className="btn-enviar" />
                            </form>
                            
                            <hr style={{borderColor: '#555', margin: '20px 0'}} />

                            <h3 className="titulo-otros-blogs">EXPLORA MÁS</h3>
                            <ul className="lista-blog">
                                <li>
                                    <Link to='/Blog1'>➜ VOLVER AL BLOG 1</Link>
                                </li>
                                <li>
                                    <Link to='/Blog2'>➜ VOLVER AL BLOG 2</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blog3;