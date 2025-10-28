import React from "react";

const Footer = () =>{
    return(
        <footer className="footer-container">
            <p className="nombre-sitio">Level-Up</p>
            <p className="informacion-adicional">© 2025 Level-UP Todos los derechos reservados</p>
            <nav className="footer-nav">
                <ul className="footer-nav">
                    <li className="nav-footer-container"><a href="#">Privacy Policy</a></li>
                    <li className="nav-footer-container"><a href="#">Terms of Services</a></li>
                    <li className="nav-footer-container"><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <input type="email" className="newsletter" placeholder="Subcribe to our newsletter"/>
            <button className="subscribe-button">subscribe</button>
        </footer>
    );
};

export default Footer;