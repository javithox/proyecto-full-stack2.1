import React from "react";
import './blogs.css'

const Blog1 = ()=>{
    return(
        <main className="main-container">
            <div className="row">
                <h2 className="titulo-blog">Comunidad Gamer 2</h2>
                <div className="col-md-8">
                    <img src="https://blog.movistar.com.co/wp-content/uploads/2024/03/plataformas-de-juegos-800x445.webp" alt="imagen" height="50%" width="50%" className="imagen-blog"/>
                    <p>Este blog es para la comunidad gamer 2 deja tu comentario sobre algun juego que juegues</p>
                </div>
                <div className="articulos">
                    <form>
                        <textarea rows={5} cols={50}></textarea>
                        <br />
                        <br />
                        <input type="submit" value="Enviar comentario" style={{backgroundColor: "#1E90FF"}} />
                    </form>
                    <h3>Otro Blogs</h3>
                    <ul>
                        <li><a href="#">Blog 1</a></li>
                        <li><a href="#">Blog 3</a></li>
                    </ul>
                </div>
            </div>
        </main>
    );
};
export default Blog1;