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
                <img src="" alt="Imagen-hero" />
            </div>

            <div className="hero-button">
                <button className="button-hero">
                    <img src="https://png.pngtree.com/png-clipart/20250515/original/pngtree-modern-desktop-computer-png-image_20978094.png" alt="boton-hero" height='25' width='25'/>
                </button>
            </div>

        </section>
    );
};
export default Hero;