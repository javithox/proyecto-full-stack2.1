import React from "react";
import './blogs.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener bootstrap

const Blog1 = () => {
    return (
        <main className="main-container">
            <div className="container">
                
                {/* Cabecera */}
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h2 className="titulo-blog">COMUNIDAD GAMER - NOTICIAS</h2>
                    </div>
                </div>

                <div className="row">
                    {/* CONTENIDO PRINCIPAL (Izquierda en PC, Arriba en Móvil) */}
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <img 
                                src="https://blog.movistar.com.co/wp-content/uploads/2024/03/plataformas-de-juegos-800x445.webp" 
                                alt="Plataformas Gamer" 
                                className="imagen-blog"
                            />
                            <p className="parrafo-blog">
                                <strong style={{color: '#39ff14'}}>Bienvenidos al Blog 1.</strong> Este espacio es para discutir sobre las plataformas actuales. 
                                ¿Prefieres PC, Consola o Móvil? Deja tu comentario abajo sobre qué estás jugando actualmente.
                            </p>
                        </div>
                    </div>

                    {/* BARRA LATERAL (Derecha en PC, Abajo en Móvil) */}
                    <div className="col-lg-4">
                        <div className="sidebar-content">
                            
                            {/* Formulario */}
                            <h3 className="titulo-otros-blogs" style={{fontSize: '1.2rem'}}>DEJA TU COMENTARIO</h3>
                            <form className="form-area">
                                <textarea rows={4} placeholder="Escribe aquí..."></textarea>
                                <input type="submit" value="Enviar" className="btn-enviar" />
                            </form>
                            
                            <hr style={{borderColor: '#555', margin: '20px 0'}} />

                            {/* Enlaces a otros blogs */}
                            <h3 className="titulo-otros-blogs">OTROS POSTS</h3>
                            <ul className="lista-blog">
                                <li>
                                    <Link to='/Blog2'>➜ IR AL BLOG 2</Link>
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

export default Blog1;