import React from "react";
import './blogs.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog2 = () => {
    return (
        <main className="main-container">
            <div className="container">
                
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h2 className="titulo-blog">EXPERIENCIA DE JUEGO</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            {/* Puedes cambiar la imagen aquí si quieres */}
                            <img 
                                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
                                alt="Esports" 
                                className="imagen-blog"
                            />
                            <p className="parrafo-blog">
                                <strong style={{color: '#39ff14'}}>Estás en el Blog 2.</strong> 
                                Aquí hablamos sobre el desempeño de los jugadores profesionales. 
                                ¿Qué opinas de los torneos recientes? Comparte tu experiencia.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar-content">
                            
                            <h3 className="titulo-otros-blogs" style={{fontSize: '1.2rem'}}>COMENTARIOS</h3>
                            <form className="form-area">
                                <textarea rows={4} placeholder="Opina sobre este tema..."></textarea>
                                <input type="submit" value="Enviar" className="btn-enviar" />
                            </form>
                            
                            <hr style={{borderColor: '#555', margin: '20px 0'}} />

                            <h3 className="titulo-otros-blogs">NAVEGACIÓN</h3>
                            <ul className="lista-blog">
                                <li>
                                    <Link to='/Blog1'>➜ VOLVER AL BLOG 1</Link>
                                </li>
                                <li>
                                    <Link to='/Blog3'>➜ IR AL BLOG 3</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blog2;