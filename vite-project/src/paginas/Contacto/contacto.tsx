import React from "react";
import './contacto.css'

const Contacto = () => {
    return(
        <section className="contenedor">
            <h2 className="titulo-contacto">Contactanos</h2>
                <form action="formulario" method="post" className="formulario">
                    <div className="nombre-campo">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="email-campo">
                        <label htmlFor="email">Correo Electronico:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="mensaje-campo">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea name="mensaje" id="mensaje" rows={4} required></textarea>
                    </div>
                    <div className="boton-primario">
                        <button type="submit" style={{ backgroundColor: "#1E90FF" }}>Enviar</button>
                    </div>

                    <section className="informacion-contacto">
                        <h2>Informacion de contactos</h2>
                        <address>
                            <p><strong>Direccion:</strong>calle sin nombre,Valparaiso,Chile</p>
                            <p><strong>Telefono:</strong>+56 9 2007 3023</p>
                            <p><strong>Correo:</strong><a href="mailto:ejemplo@gmail.com">ejemplo@gmail.com</a></p>
                        </address>

                    </section>
                </form>
        </section>
    );
};

export default Contacto;