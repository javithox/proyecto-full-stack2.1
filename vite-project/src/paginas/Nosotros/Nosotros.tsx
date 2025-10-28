import React from "react";
import "./Nosotros.css";

const Nosotros = () => {
    return(
        <main className="main-container">
            <section className="main-header">
                <div className="informacion-nosotros">
                    <h1 className="titulo-nosotros">Sobre nosotros</h1>
                </div>

                <div className="Contenido">
                    <p className="parrafo1">Esta pagina se encarga de vender productos abuenos precios imperdibles todo a buenos descuentos para todo tipo de jugadores gamers de las gamas</p>

                </div>
            </section>

            <section className="main-header">
                <div className="informacion-nosotros">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFlV23kXbZhlWT0Q_cA-npNzq64SmklufWw&s" alt="logo" className="imagen-nosotros"/>
                        <p className="parrafo2">Esta comunidad esta atenta a los sucesos o hecho que ocurren en los juegos y a la experiencia de lo jugador</p>
                    </div>

                </div>
            </section>
        </main>
    );
};
export default Nosotros;