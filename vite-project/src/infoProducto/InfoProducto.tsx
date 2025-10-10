import type { CSSProperties } from "react";
import miLogo from '../logo-image/image-removebg-preview.png';



const nombretienda:string='Level-Up'


const estiloTienda:CSSProperties={
    color:'#39ff14',
    padding:10,
    margin:10,
    marginTop:20,
    fontFamily:'Arial, sans-serif',
    textAlign:'left',
    textShadow:'2px 2px 4px #39ff14'
}

export const InfoTienda = () => {
    return(
        <>
            <section className="contenedor-infoProducto">
                <div>
                    <h1 style={estiloTienda}>Tienda Gamer </h1>
                    <h2 style={estiloTienda}><img src={miLogo} alt="Logo" height="90px" width="90px" className="imagen-logo"/> {nombretienda}</h2>
                    <nav>
                        <a href="#" className="btn-nav">Inicio</a>
                        <a href="#" className="btn-nav">Productos</a>
                        <a href="#" className="btn-nav">Nosotros</a>
                    </nav>

                </div>
            </section>
            <article>
                <div>
                    <h2 style={estiloTienda}>Sobre la tienda</h2>
                    <img src="https://w0.peakpx.com/wallpaper/626/351/HD-wallpaper-level-up-gaming-cool-fun-game-level-up-next-level-play-playing-win-winner.jpg" alt="imagen level up" className="imagen-presentacion" />
                    <p style={estiloTienda}>La tienda level up gamer tiene toda clase de productos para jugadores gamers de pc de toda gama</p>
                </div>
            </article>
                
            

        </>
    )
}