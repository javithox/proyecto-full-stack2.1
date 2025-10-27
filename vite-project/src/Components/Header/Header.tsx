import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo-image/image-removebg-preview.png'

const Header = () =>{
    return(
        <header className='main-header'>
            <img src={logo} alt="Logo" className='Logo'/>
            <nav className='main-nav'>
                <Link to='/InfoProducto'>Productos</Link>
                <Link to='/Login' className='Login'>Login</Link>
                <Link to='/Registrar'>Registrar</Link>
                <Link to='#'>Nosotros</Link>
                <Link to='#'>Blogs</Link>
                <Link to='#'>Contacto</Link>

            </nav>
        </header>
    );
};
export default Header;