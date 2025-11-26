import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap
import './contacto.css';

const Contacto = () => {
    return(
        <section className="contact-section">
            <div className="container">
                
                {/* Título Centrado */}
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="titulo-contacto">CONTÁCTANOS</h2>
                    </div>
                </div>

                <div className="row">
                    
                    {/* COLUMNA 1: FORMULARIO */}
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                        <div className="form-box">
                            <form action="#" method="post">
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                                    <input type="text" id="nombre" className="form-input" placeholder="Tu nombre" required />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                                    <input type="email" id="email" className="form-input" placeholder="tucorreo@ejemplo.com" required />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="mensaje" className="form-label">Mensaje:</label>
                                    <textarea id="mensaje" rows={5} className="form-input" placeholder="¿En qué podemos ayudarte?" required></textarea>
                                </div>
                                
                                <button type="submit" className="btn-enviar">ENVIAR MENSAJE</button>
                            </form>
                        </div>
                    </div>

                    {/* COLUMNA 2: INFORMACIÓN */}
                    <div className="col-12 col-lg-6">
                        <div className="info-box">
                            <h2 className="info-title">INFORMACIÓN DE CONTACTO</h2>
                            <address style={{fontStyle: 'normal'}}>
                                <p className="info-text">
                                    <strong>Dirección:</strong><br/> 
                                    Calle Sin Nombre 123, Valparaíso, Chile
                                </p>
                                <p className="info-text">
                                    <strong>Teléfono:</strong><br/> 
                                    +56 9 2007 3023
                                </p>
                                <p className="info-text">
                                    <strong>Correo:</strong><br/> 
                                    <a href="mailto:soporte@gamerzone.com">soporte@gamerzone.com</a>
                                </p>
                            </address>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contacto;