import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row text-center text-md-start">
                    
                    {/* COLUMNA 1: MARCA Y DESCRIPCIÓN */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <span className="footer-brand">LEVEL-UP</span>
                        <p className="footer-desc">
                            Tu destino definitivo para noticias, reseñas y la mejor comunidad gamer. 
                            Sube de nivel con nosotros.
                        </p>
                    </div>

                    {/* COLUMNA 2: ENLACES RÁPIDOS */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <h4 className="newsletter-title" style={{color:'#fff'}}>ENLACES</h4>
                        <ul className="footer-nav">
                            <li><a href="#" className="texto-footer">Política de Privacidad</a></li>
                            <li><a href="#" className="texto-footer">Términos de Servicio</a></li>
                            <li><a href="#" className="texto-footer">Contáctanos</a></li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: NEWSLETTER */}
                    <div className="col-12 col-md-4">
                        <h4 className="newsletter-title">NEWSLETTER</h4>
                        <p style={{color:'#aaa', fontSize:'0.9rem'}}>Recibe las últimas noticias y códigos de regalo.</p>
                        
                        <div className="newsletter-form">
                            <input 
                                type="email" 
                                className="newsletter-input" 
                                placeholder="Tu correo electrónico..."
                            />
                            <button className="subscribe-button" style={{backgroundColor:'#39ff14'}}>
                                SUSCRIBIRSE
                            </button>
                        </div>
                    </div>

                </div>

                {/* BARRA INFERIOR COPYRIGHT */}
                <div className="footer-bottom">
                    <p>© 2025 Level-UP. Todos los derechos reservados. Designed for Gamers.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;