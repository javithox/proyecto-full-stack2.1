import React from "react";
import './blogs.css'
import { Link } from 'react-router-dom';

const Blog1 = ()=>{
    return(
        <main className="main-container">
            <div className="row">
                <h2 className="titulo-blog">Comunidad Gamer </h2>
                <div className="col-md-8">
                    <img src="https://blog.movistar.com.co/wp-content/uploads/2024/03/plataformas-de-juegos-800x445.webp" alt="imagen" height="50%" width="50%" className="imagen-blog"/>
                    <p className="parrafo-blog" style={{color:'#39ff14'}}>Este blog es para la comunidad gamer deja tu comentario sobre algun juego que juegues</p>
                </div>
                <div className="articulos">
                    <form className="form-control">
                        <textarea rows={5} cols={50}></textarea>
                        <br />
                        <br />
                        <input type="submit" value="Enviar comentario" style={{backgroundColor: "#1E90FF"}} />
                    </form>
                    <h3 className="titulo-otros-blogs" style={{color:'#39ff14'}}>Otro Blogs</h3>
                    <ul className="lista-blog">
                        <li><Link className="blog2" to='/Blog2'>Blog 2</Link></li>
                        <li><Link className="blog3" to='/Blog3'>Blog 3</Link></li>
                    </ul>
                </div>
            </div>
        </main>
    );
};
export default Blog1;