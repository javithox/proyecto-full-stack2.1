import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo-image/image-removebg-preview.png'
import './Header.css';

const Header = () =>{
    return(
        <header className='main-header'>
            <img src={logo} alt="Logo" className='Logo' height='120' width='150'/>
            <nav className='main-nav'>
                <Link to='/'>Inicio</Link>
                <Link to='/Productos'>Productos</Link>
                <Link to='/Login' className='Login'>Login</Link>
                <Link to='/Registrar'>Registrar</Link>
                <Link to='#'>Nosotros</Link>
                <Link to='#'>Blogs</Link>
                <Link to='#'>Contacto</Link>
                <Link to='/CarritoCompras'>Carrito</Link>

            </nav>
        </header>
    );
};
export default Header;