import React from "react";
import './blogs.css'
import { Link } from "react-router-dom";

const blog2 = () => {
    return(
        <main className="main-container">
            <div className="row">
                <h2 className="blog-titulo">Comunidad Gamer 2</h2>
            </div>

            <div className="col-md-8">
                <p className="parrafo">Este blog corresponde para la comunidad gamer 2 deja tu comentario de juegos o experiencia de los videosjuegos del momento que el jugador se desempeña</p>
            </div>

            <div className="articulos">
                <form className="form-control">
                    <textarea rows={5} cols={50}></textarea><br></br>
                    <input type="submit" value='Enviar comentario' style={{backgroundColor:'#1e90ff'}}/>
                </form>
                <h3 className="titulo-otros-blogs" style={{color:'#39ff14'}}>Otro Blogs</h3>
                <ul className="lista-blog">
                    <li><Link to='/Blog1'>Blog1</Link></li>
                    <li><Link to='/Blog3'>Blog3</Link></li>
                </ul>
            </div>
        </main>
    );
};
export default blog2;