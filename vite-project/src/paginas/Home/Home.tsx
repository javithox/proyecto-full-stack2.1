import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap
import Hero from "../../Components/Hero/Hero"; // Asegúrate de que la ruta sea correcta
import "./Home.css"; // Importamos el nuevo CSS

const Home = () => {
    return(
        <div className="home-section">
            <div className="container">
                
                {/* 1. TÍTULO Y LOGO/IMAGEN */}
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-lg-10">
                        
                        <h1 className="titulo-home">TIENDA LEVEL-UP</h1>
                        
                        <div className="mb-5">
                            <img 
                                className="img-fluid imagen-level" 
                                src="https://www.shutterstock.com/shutterstock/videos/1091492275/thumb/1.jpg?ip=x480" 
                                alt="Level Up Gaming" 
                            />
                        </div>

                    </div>
                </div>

                {/* 2. TEXTO DE BIENVENIDA */}
                <div className="row justify-content-center">
                    {/* En PC (lg) ocupa 8 columnas centradas. En móvil (12) ocupa todo. */}
                    <div className="col-12 col-lg-8">
                        <div className="intro-text-box">
                            <p className="texto-home">
                                Presentamos nuestra tienda online donde podrás encontrar todo tipo de 
                                artículos gamers, desde PC hasta fundas para mouses. Todo tipo de 
                                productos los encontrarás en la tienda de <strong style={{color:'#39ff14'}}>Level-Up</strong> a precios imperdibles.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. COMPONENTE HERO (Separado un poco del texto) */}
                <div className="row mt-5">
                    <div className="col-12">
                        <Hero/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;