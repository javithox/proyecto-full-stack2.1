import React from "react";

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero-text">
                <h2>Tienda Online</h2>
                <p>Producto</p>
                <p><strong>Hasta el 90% de descuento en black friday</strong></p>
            </div>

            <div className="hero-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGK5OgZWDDj3SZQ5Ws8qz3yzovLzpTgt7q2A&s" alt="Imagen-hero" height='90px' width='669px'/>
            </div>

            <div className="hero-button" style={{position:'absolute', top:'180px'}}>
                <button className="button-hero">
                    <img src="https://png.pngtree.com/png-clipart/20250515/original/pngtree-modern-desktop-computer-png-image_20978094.png" alt="boton-hero" height='25' width='25'/>
                </button>
            </div>

        </section>
    );
};
export default Hero;