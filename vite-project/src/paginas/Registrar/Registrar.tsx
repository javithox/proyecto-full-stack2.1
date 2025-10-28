import React from 'react';
import logo from '../../assets/logo-image/image-removebg-preview.png';
import './Regisrtar.css'


const Registrar = () =>{
    return(
        <main className='main-container'>
            <section className='main-header bg-black'>
                <div className='contenedor-registrar'>
                    
                    <div className='justify-content-center'>
                        <h1 className='titulo-pagina'>Registrarse</h1>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-md-6 col-lg-5'>
                            <form action="#" method='post' className='form-container p-4 border rounded bg-light shadow-sm'>
                                <div className='mb-3'>
                                    <label htmlFor="username" className='form-label'>Nombre de Usuario</label>
                                    <input type="text" id='username' className='form-control' placeholder='Ingrese su nombre de usuario' required autoComplete='username' />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="username" className='form-label'>Correo</label>
                                    <input type="text" id='Email' className='form-control' placeholder='Ingrese su Correo' />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="password" className='form-label'>Contraseña</label>
                                    <input type="password" id='password' name='password' className='form-control' placeholder='Ingrese su contraseña' required autoComplete='current-password' />
                                </div>

                                <div className='d-grid mb-3'>
                                    <button type='submit' className='btn-btn-primary'>Registrarse</button>
                                </div>
                                <div className='text-center'>
                                    <a href="login.html" className='texto-registrar' style={{color: '#39ff14'}}>¿Ya tienes cuenta? Iniciar Sesión.</a>
                                </div>
                                
                            </form>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
};
export default Registrar;