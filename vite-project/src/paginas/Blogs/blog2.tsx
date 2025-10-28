import React from "react";
import './blogs.css'

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
                <form>
                    <textarea rows={5} cols={50}></textarea><br></br>
                    <input type="submit" value='Enviar comentario' style={{backgroundColor:'#1e90ff'}}/>
                </form>
                <h3>Otro Blogs</h3>
                <ul>
                    <li><a href="blog1.tsx">Blog1</a></li>
                    <li><a href="blog3.tsx">Blog3</a></li>
                </ul>
            </div>
        </main>
    );
}