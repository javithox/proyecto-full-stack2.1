import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap
import "./Nosotros.css";

const Nosotros = () => {
    return(
        <main className="about-section">
            <div className="container">
                
                {/* 1. TÍTULO PRINCIPAL */}
                <div className="row mb-5">
                    <div className="col-12">
                        <h1 className="titulo-nosotros">SOBRE NOSOTROS</h1>
                    </div>
                </div>

                {/* 2. PRIMER PÁRRAFO (Centrado) */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="text-box">
                            <p className="texto-neon">
                                Esta página se encarga de vender productos a <strong>buenos precios imperdibles</strong>, 
                                todo con buenos descuentos para todo tipo de jugadores gamers de todas las gamas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. SECCIÓN IMAGEN + TEXTO */}
                <div className="row align-items-center">
                    
                    {/* Columna Imagen (Izquierda en PC, Arriba en Móvil) */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFlV23kXbZhlWT0Q_cA-npNzq64SmklufWw&s" 
                            alt="Comunidad Gamer" 
                            className="img-fluid imagen-nosotros" 
                        />
                    </div>

                    {/* Columna Texto (Derecha en PC, Abajo en Móvil) */}
                    <div className="col-12 col-md-6">
                        <div className="text-box">
                            <p className="texto-neon">
                                Esta comunidad está atenta a los sucesos o hechos que ocurren en los juegos y a la 
                                <strong> experiencia del jugador</strong>. Nos dedicamos a traer lo mejor del mundo gaming.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Nosotros;